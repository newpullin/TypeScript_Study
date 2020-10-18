- package.json 생성
npm init --y
- typescript 설치
npm i -D typescript ts-node
- tsconfig.json 생성
tsc --init

- 스크립트에 dev와 build 추가
"scripts": {
    "dev" : "ts-node src",
    "build" : "tsc && node dist"
}

스크립트 실행

npm run dev
npm run build
