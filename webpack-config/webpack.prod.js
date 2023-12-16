const path = require('path') // node.js 의 내장모듈 => 파일경로와 관련된 유틸리티를 제공해줌.
const { merge } = require('webpack-merge') // 웹팩 구성을 병합시켜주는 패키지 => 여러구성 파일을 합치기 위해 사용함.
const common = require('./webpack.common.js') // 파일에서 공통으로 사용되는 웹팩 설정 가져옴. ex) 로더 설정, 플러그인 구성

// merge() 함수를 사용 => 공통설정(common) 과 운영 환경설정을 병합해서 최종 웹팩 설정을 내보냄.
module.exports = merge(common, {
	mode: 'production', // 운영환경으로 설정 => 웹팩이 운영환경에 맞게 최적화 되고, 번들링된 파일이 최소화되며 최적화된다.
	output: {
		// 번들링된 JS 파일의 이름을 설정
		// [contenthash] 는 파일 내용에 개반한 해시값을 포함해서, 파일이 변경될 때마다 새로운 파일명을 생성한다.
		// => 이를 통해서 브라우저 캐시를 효율적으로 관리함.
		filename: 'main.[contenthash].js',

		// 출력 경로를 설정해서 번들링 된 파일이 생성될 디렉토리를 저장.
		// __dirname는 현재 파일의 디렉토리를 나타냄.
		// 따라서 dist 디렉토리에 번들링 된 파일이 생성됨.
		path: path.resolve(__dirname, 'dist')
	}
})
