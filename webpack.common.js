const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 모듈시스템에서 CommonJS 스타일을 사용해서 설정 정보를 내보냄.
module.exports = {
  // entry는 웹팩이 번들링을 시작할 진입점 (entry point) 을 정의한다.
  // ../src/app.js 파일을 진입점으로 설정해서, 응용 프로그램의 시작점을 정의한다.
  entry: './src/app.js',
  // output은 번들링된 파일에 대한 설정을 정의한다.
  // filename은 번들링된 결과물의 파일명을 설정한다.
  // 번들링된 자바스크립트 파일은 'bundle.js' 로 생성된다.
  output: {
    filename: 'bundle.js',
  },
  // plugins 는 웹팩에서 사용되는 플러그인들의 배열을 정의한다.
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()],
  // CleanWebpackPlugin => 빌드 이전에 이전 빌드 결과물들을 clean 해주는 플러그인이다.
  // 이전 빌드의 파일들을 삭제하고 새로운 빌드를 생성한다.

  // HtmlWebpackPlugin => HTML 파일을 생성하고 번들링된 자원에 대한 링크를 자동으로 추가해주는 플러그인이다.
  // 이를 통해서 자동으로 HTML 파일을 생성하고 번들링된 자바스크립트 파일에 대한 연결을 관리한다.
};
