const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js', // app.js 파일을 진입점으로 설정
  output: {
    filename: 'bundle.js', // 번들링된 결과물의 파일명을 'bundle.js'로 설정
    path: path.resolve(__dirname, 'dist'), // 번들된 파일의 출력 디렉토리 설정
  },
  plugins: [
    new CleanWebpackPlugin(), // 빌드 이전에 이전 빌드 결과물들을 clean 해주는 플러그인
    new HtmlWebpackPlugin(), // HTML 파일을 생성하고 번들링된 자원에 대한 링크를 자동으로 추가해주는 플러그인
  ],
};
