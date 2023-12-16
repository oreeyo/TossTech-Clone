module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true    //module.export를 하려고 하면 자꾸만 module is not defined라는 오류가 발생 => eslint 설정 시 환경(env)에서 node를 설정.
    },
    "extends": ["eslint:recommended", "plugin:prettier/recommended"],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
    },
    "parser": "babel-parser" // parser를 babel parser로 설정해주면 최신 ECMA 버전을 사용할 수 있다.
}
