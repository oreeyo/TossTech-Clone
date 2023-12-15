const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',

    /*
    path.resolve(__dirname, 'public')는 
    현재 파일(webpack.config.js)의 디렉토리에 있는
    public 폴더에 bundle.js라는 이름으로
    번들링된 파일을 출력하도록 지정한다.
    */
    path: path.resolve(__dirname, 'public'),
  },
  module: {  // 웹팩 모듈 처리 규칙을 정의한다
    rules: [ // 다양한 유형의 파일들을 처리하는 규칙들을 배열로 포함한다.
      {
        test: /\.js$/,   // 자바스크립트 파일(.js)을 처리하기 위한 규칙
        exclude: /node_modules/, // node_modules 폴더 내의 파일은 제외 
        use: 'babel-loader',   // babel-loader를 사용하여 ES6+ 문법을 하위 버전의 JavaScript로 변환
      },
      {
        test: /\.css$/,  // CSS 파일을 처리하는 규칙
        use: ['style-loader', 'css-loader'],
        /*
        style-loader를 사용하여 CSS를 해석.
        css-loader를 사용하여 CSS 파일을 JavaScript 모듈로 변환
        */
      },
    ],
  },
};