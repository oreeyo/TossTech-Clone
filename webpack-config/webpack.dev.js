// webpack.dev.js는 웹팩의 구성을 조합하고 개발환경 설정을 정의하는 모듈이다.

// path => Node.js 의 내장모듈로, 파일경로와 관련된 유틸리티를 제공한다.
const path = require('path');

// webpack-merge => 웹팩 구성을 병합하는데 사용되는 패키지, 여러구성 파일을 합치기위해 사용된다.
const { merge } = require('webpack-merge');

// 파일에서 공통으로 사용되는 웹팩 설정을 가져온다.
// 이 파일은 보통 공통구성요소( 로더설정, 플러그인 구성 등)을 포함한다.
const common = require('./webpack.common.js');

// merge() 함수를 사용해서 공통설정(common) 과 개발환경 설정을 병합한 결과를 내보낸다.
module.exports = merge(common, {
  mode: 'development', //개발모드로 설정 => 웹팩이 개발환경에 맞게 최적화되며, 번들링된 파일이 가독성 있게 출력되게 해줌.
  devtool: 'inline-source-map', // 소스맵을 생성해서 디버깅을 용이하게 함 => 브라우저에서 디버깅 할 때, 원본 소스코드와 번들링된 코드 간의 매핑을 제공함.
  devServer: { contentBase: './dist' },
  // 개발서버 (devServer)를 설정하는데, ./dist 디렉토리를 서버의 콘텐츠 베이스로 사용하고,
  // 변경사항이 있을 때, 서버를 다시 시작하지 않아도 브라우저를 새로고침해서 변경사항을 확인할 수 있다.

  output: {
    // output에서는 번들링된 결과물에 대한 설정을 재정의 한다
    filename: 'main.js', // 번들링된 JS 파일의 이름을 main.js 로 지정한다.
    path: path.resolve(__dirname, 'dist'),
    // 출력 경로를 설정해서, 번들링된 파일이 생성될 디렉ㅌ리를 지정한다.
    // __dirname 는 현재 파일의 디렉토리를 나타낸다.
    // 따라서 dist 디렉토리에 번들링된 파일이 생성된다.
  },
});
