 
h2.package.json
 "scripts": {
    "lint": "eslint ."    =>  이제부터 터미널에 npm run lint라고 입력하면 프로젝트의 전체 파일을 상대로 ESLint가 실행된다.
  }



h2. ESLint 강제 하기

모든 개발자가 본인이 작성한 소스 코드에 대해 린트를 수행하고 
발견된 문제를 해결 후에 커밋(commit)을 해주면 참 좋겠지만 현실은 그렇지가 않다. 

소스 코드를 커밋할 때 ESLint를 강제로 실행하여 문제가 있다면 
코드 저장소(repository)에 유입되는 것을 차단할 수 있는 유용한 방법이 있다.

lint-staged와 husky라는 패키지를 개발 의존성으로 설치한다.

$ npm i -D lint-staged husky

lint-staged는 스테이징 영역에 있는 파일을 상대로 린트를 해주는 도구이고, 
husky는 git 커맨드 실행 시에 특정 스크립트를 실행주는 도구이다.
패키지 설치가 끝나면, package.json 파일에 다음 설정을 추가해준다.

  "lint-staged": {
    "*.js": [
      "eslint --fix",
      "git add"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }

이렇게 설정을 하면 개발자가 git commit 명령어를 날릴 때 마다, 
스테이징 영역에 있는 파일을 상대로 린트를 해주고 가능하면 코드 교정까지 해준다.