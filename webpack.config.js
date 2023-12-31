const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/app.js', // app.js 파일을 진입점으로 설정
	output: {
		filename: 'bundle.js', // 번들링된 결과물의 파일명을 'bundle.js'로 설정
		path: path.resolve(__dirname, 'dist'), // 번들된 파일의 출력 디렉토리 설정
		publicPath: '/'
	},
	mode: 'development',
	plugins: [
		new CleanWebpackPlugin(), // 빌드 이전에 이전 빌드 결과물들을 clean 해주는 플러그인
		new HtmlWebpackPlugin({
			template: './index.html', // 사용할 HTML 템플릿 파일 경로
			filename: 'index.html' // 생성될 HTML 파일의 이름
		}) // HTML 파일을 생성하고 번들링된 자원에 대한 링크를 자동으로 추가해주는 플러그인
	],
	devServer: {
		devMiddleware: { publicPath: '/' }, //브라우저를 통해 접근하는 경로. 기본값은 '/' 이다.
		static: { directory: path.resolve(__dirname, 'public') }, //정적파일을 제공할 경로. 기본값이 public으로 설정되어 있다.
		hot: true,
		port: 9001,
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.js$/, // JS 파일에 대한 로더 설정
				exclude: /node_modules/, // node_modules 디렉토리는 제외
				use: {
					loader: 'babel-loader', // babel-loader 사용
					options: {
						presets: ['@babel/preset-env'] // 바벨 프리셋 설정
					}
				}
			},
			{
				test: /\.css$/, // CSS 파일에 대한 로더 설정
				use: ['style-loader', 'css-loader'] // style-loader와 css-loader 사용
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: './public/images', // 이미지가 저장될 경로 설정
							publicPath: './public/images' // 웹에서 접근하는 경로 설정
						}
					}
				]
			}
		]
	}
}
