# 람다 라이브러리

* R.range 함수

- R.range(최솟값, 최댓값)

* R.tap 디버깅용 함수

- R.tap(a => console.log(a))(input: <T>[])

* R.pipe 함수

R.pipe(
    R.tap,
    R.tap
)

* R.flip

- 2차 고차 함수의 매개 변수 순서를 바꿔줍니다.

const reserveSubtract = R.flip(R.subtract)


## 문자열 다루기

R.trim
R.toLower
R.split
R.join
R.split
