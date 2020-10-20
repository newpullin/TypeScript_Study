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


## 렌즈를 활용한 객체의 속성 다루기

* 렌즈란?

렌즈는 하스켈 언어의 Control.Lens 라이브러리 내용 중 자바스크립트에서 동작할 수 있는
게터(getter)와 세터(setter) 기능만을 람다 함수로 구현한 것입니다.

람다의 렌즈 기능을 활용하면 객체의 속성값을 얻거나 설정하는 등의 작업을 쉽게 할 수 있습니다.

렌즈 사용법

1. R.lens 함수로 객체의 특정 속성에 대한 렌즈를 만든다.
2. 렌즈를 R.view 함수에 적용해 속성값을 얻는다.
3. 렌즈를 R.set함수에 적용해 속성값이 바뀐 새로운 객체를 얻는다.
4. 렌즈와 속성값을 바꾸는 함수를 R.over 함수에 적용해 값이 바뀐 새로운 객체를 얻는다.


## 배열다루기

R.prepend , 앞에 새 요소를 추가한 새 배열을 반환
R.append , 뒤에 새 요소를 추가한 새 배열을 반환
R.flatten, 복잡한 배열을 1차원 배열로 바꾼 새 배열을 반환
R.unnest, 1차원 씩 벗겨줌
R.sort :  배열의 타입이 number라면 정렬
callback 함수에 a-b -> 오름차순, b-a 내림차순
R.sortBy :  객체배열에서 객체의 특정 속상 값에 따라 정렬하는 것
R.sortWith : sortBy에 내림차순 오름차순 추가한거


## 조합 논리 이해하기

함수형 프로그래밍의 가장 큰 이론적인 배경은 람다 수학(lambda calculus)과
조합 논리학(combinatory logic), 그리고 카테고리 이론(category theory) 입니다.


* 조합자란?

R.chain 함수 탐구

chain-test.ts