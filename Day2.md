# 함수와 메서드

* 함수는 객체다

- 프로그래밍 언어가 일등 함수(first-class function)을 제공하면 함수형 프로그래밍 언어라고 함
일등 함수라는 것은 변수와 함수를 구분하지 않는다는 의미

* 계산법

- 계산법에는 조급한 계산법(eager evaluation)과 느긋한(또는 지연) 계산법(lazy evaluation) 두가지가
있습니다. 

- 컴파일러가 
1 + 2 의 경우에는 조급한 계산법을 적용하여 바로 결과를 도출하고 function(a, b) { return a+ b}
를 만난 경우 a,b 가 어떤 값인지 알 수 없으므로 느긋한 계산법을 적용합니다.

* 익명함수

- 함수표현식(functino expression)은 사실 대부분 언어에서 언급되는 익명 함수(anonymous function)의
다른 표현입니다.

let value =
(function(a, b) { return a + b})(1, 2)

* const

- 함수의 선언이 바뀌지 않으므로 const로 저장합니다.


# 배열 이해하기

* Array 클래스

- let name = new Array(length)

* 단축 구문

let numbers = [1, 2, 3]

* 배열은 객체

* for in 은 인덱스, for of 는 값, fon in 객체일 때는 property

