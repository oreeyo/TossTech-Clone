/*
ESLint는 JSON, YAML, JavaScript와 같이 다양한 형식의 설정 파일을 지원한다.
설정 파일의 이름은 항상 .eslintrc가 되야하며, 
원하는 포맷에 따른 파일 확장자를 사용해야 한다.

예를 들어, JSON 파일 포맷을 사용하고 싶다면 .eslintrc.json, 
YAML 파일 포맷을 사용하고 싶다면 .eslintrc.yml이나 .eslintrc.yaml을 사용하면 된다.
*/

/*
참고로 ESLint는 
현재 린트(lint) 대상의 파일이 위치한 폴더 안에 
설정 파일이 있는지 우선적으로 확인해보고,
없으면 그 상위 폴더를 한 단계 씩 거슬러 올라가면서 설정 파일을 찾게된다.

root 옵션이 true로 설정되어 있는 설정 파일을 만나면
더 이상 상위 폴더로 올라가지 않는다.

예를 들어서,
프로젝트의 별 설정 파일에는 root 옵션을 false로 설정하고, 
코드 저장소 최상위 경로에는 root 옵션을 true로 설정하면 
코드 저장소의 공통 설정과 
프로젝트 별 특화 설정을 분리해서 
관리할 수 있어서 편하다.

ESLint 설정 파일이 하나만 있는 레파지토리에서도 
혹여나 상위 폴더에 있는 설정 파일에 영향을 받는 일이 없도록 
root 옵션을 true로 설정하는게 좋다.

*/

module.exports = {
  /*
    ESLint는 기본적으로 미리 선언하지 않고 
    접근하는 변수에 대해서는 오류를 내기 때문에, 
    이렇게 각 실행 환경(runtime)에서 
    기본적으로 제공되는 전역 객체에 대해서는
    설정을 통해 알려줘야 한다. 
    이러한 역할을 실행 파일의 env 옵션이 담당한다.
    */

  /*
    ESLint로 린트(lint)를 할 자바스크립트 코드가 
    브라우저에서 실행될 수도 있고, 
    NodeJS에서도 실행될 수 있다면, 
    두 가지 실행 환경에서 접근 가능한 모든 전역 객체를 다음과 같이 등록해줄 수 있다.
    */
  env: {
    browser: true,
    node: true,
    es2021: true // JavaScript의 최신 버전인 ES2021(ECMAScript 2021)에 대한 지원을 활성화하는 설정
  },

  root: true, // root 옵션이 true로 설정되어 있는 설정 파일을 만나면, 설정 파일을 찾기위해 더 이상 상위 폴더로 올라가지 않는다.

  // 설정 파일의 extends 옵션을 통해서공개해놓은 설정을 그대로 가져와 설정으로 활용할 수 있다.
  // 대부분의 ESLint 플러그인은 추천 설정을 제공한다. extends 옵션은 이러한 추천 설정을 사용할 때도 사용된다.
  // eslint 와 prettier 의 추천 설정을 그대로 가져와 적용함.
  extends: ['eslint:recommended', 'prettier'],

  /*
    ESLint는 
    기본적으로 순수한 자바스크립트 코드만 이해할 수 있기 때문에 
    자바스크립트의 확장 문법이나 최신 문법으로 작성한 코드를 린트(lint)하기 위해서는 
    그에 상응하는 파서(parser)를 사용하도록 설정해줘야 한다.
    */

  // parser는 ESLint에서 코드를 해석하는 데 사용할 파서를 지정하는 부분이다.
  // 이 설정은 Babel이 제공하는 ESLint 파서인 @babel/parser를 사용하도록 지시하는거다.

  /*
    Babel의 ESLint 파서인 @babel/parser"는 Babel을 통해 JavaScript 코드를 파싱하고
    AST(Abstract Syntax Tree)를 생성하는 데 사용된다. 
    이를 통해 ESLint가 JavaScript 코드를 이해하고 정적 분석을 수행하여 코드 품질을 검사할 수 있게 해준다.

    Babel은 주로 최신 JavaScript 기능을 사용하고,
    특히 JSX, TypeScript 등과 같은 확장된 문법을 사용하는 프로젝트에서 많이 사용된다. 
    @babel/parser"는 이러한 환경에서 ESLint를 사용할 때 Babel의 파싱 능력을 이용하여 코드를 분석하고 검사하는 데 사용된다.
    */
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest', // 사용할 ECMAScript 버전을 설정 (최신으로 해놓음)
    sourceType: 'module' // sourceType: parser의 export 형태를 설정
  },

  // 설정 파일에서 rules 옵션은 각각의 규칙을 제어하기 위해서 사용된다.
  // 일반적으로는 extends 옵션을 통해서 설정된 규칙을 덮어 씌우고 싶을 때 사용한다.
  // rules 옵션에 추가된 규칙은 extends 옵션을 통해서 가져온 규칙보다 우선 시 한다.
  rules: {
    'prettier/prettier': ['error'], // ESLint에게 Prettier의 코드 스타일 규칙을 따르도록 강제하는 설정이다. 코드에서 발견된 Prettier의 스타일 규칙 위반 시에, ESLint가 오류를 표시한다.

    /*
        import 문에서 대소문자 구분 여부를 설정하는 규칙이다.
        설정된 경우, import 문에서 모듈을 찾을 때 대소문자를 구분하지 않는다.

        예를 들어, "import/no-unresolved" 규칙이 "error"로 설정된 경우, 
        파일 경로나 모듈명의 대소문자가 일치하지 않을 때, ESLint가 오류를 표시해준다. 
        
        하지만,
        caseSensitive 속성이 false로 설정되어 있으므로, 대소문자를 구분하지 않는다.
        */
    'import/no-unresolved': [
      'error',
      {
        caseSensitive: false
      }
    ]
  }
}
