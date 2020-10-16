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

* 제너릭 타입

일반적인 배열의 길을을 반환하는 함수 (자바스크립트)
const arrayLength = (array) => array.length
범용적인 객체의 길이를 반환하는 함수 (타입스크립트)
const arrayLength = (array: T[]):number => array.length

배열의 길이가 비었는지 확인하는 제너릭 타입의 함수

const isEmpty = <T>(array: T[]):boolean => arrayLength<T>(array) == 0

* 전개 연산자

let array1: number[] = [1]
let array2: number[] = [2, 3]
let mergedArray: number[] = [...array1, ...array2, 4]

* range 함수 구현

const range = (from: number, to: number): number[] => from < to ? [from , ...range(from+1), to] : []


# 선언형 프로그래밍과 명령형 프로그래밍의 차이

* 선언형 프로그래밍은 명령형 프로그래밍처럼 for문을 사용하지 않고
모든 데이터를 배열에 담습니다. 그리고 문제가 해결될 때까지 끊임없이 또 다른 형태의 배열로
가공하는 방식으로 구현합니다.

* 1부터 100까지 더하기 문제 풀이


* 명령형 방식
let sum = 0
for(let val =l; val <= 100 )
    sum += val++
console.log(sum)

* 선언형 방식

데이터 생성과 데이터 가공 과정을 분리

- 데이터 생성
let numbers: number[] = range(1, 100 + 1)

- 데이터 가공

const fold = <T>(array: T[], callback: (result: T, val: T) => T, initValue: T) => {
    let result: T = initValue
    for(let i = 0; i < array.length; ++i) {
        const value = array[i]
        result = callback(result, value)
    }
    return result
}

let result = fold(numbers, (result, value) => result + value, 0)
console.log(result)

- 함수형의 장점, 재사용성,

- 홀수의 합을 더한다고 해보자

let numbers: number[] = range(1, 100+1)
const isOdd = (n: number): boolean => n % 2 != 0
let result = fold(
    filter(numebrs, isOdd),
    (result, value) => result + value, 0)
console.log(result)

이런식으로 데이터 생성 -> 가공의 과정을 함수화해서,
부분만 바꾸면 재사용 가능한 형태로 조합할 수 있다는 장점이 있다.

- 짝수를 더한다면 isOdd 를 isEven 함수로 바꾸면 되고
- 제곱을 더한다고 하면 result + value*value 로 바꾸면 된다.


* filter, map, reduce

let reduceMul: number = range(1, 10+1)
.reduce((result: number, value:number) => result * value, 1)

# 순수 함수와 배열

* 순수함수란?

부수효과가 없는 함수 <-> 불순 함수

* 순수함수의 조건

- 함수 몸통에 입출력 관련 코드가 없어야 한다.
- 함수 몸통에서 매개변수값 변경 x => const, readonly
- 만들어진 결과를 즉시 반환
- 전역변수나 정적변수 사용 X
- 예외를 발생시키지 않음
- 함수가 콜백으로 구현되었거나, 몸통에서 콜백함수를 사용x
- 함수 몸통에 Promise와 같은 비동기 방식으로 동작하는 코드가 없다.

EX)

function pure(a: number, b:numer): number { return a+b}

- 깊은 복사 => 값만 복제

- 얕은 복사 => 참조값을 복사

배열의 경우 ...을 쓰면 깊은 복사 가능

const newArray = [... oArray]

배열의 sort메서드를 순수함수로 구현하기

const pureSort = <T>(array: readonly T[]): T[] => {
    let deepCopied = [...array]
    return deepCopied.sort()
}

배열의 요소 삭제에 splice를 쓰는데, filter를 사용하면 삭제를 순수함수로 구현할 수 있다.


지금까지 배운 내용을 통해서 mergeArray 함수를 순수함수로 구현하면

const mergeArray = <T>(...arrays: readonly T[][]) : T[] => {
    let result: T[] = []
    for(let index=0; index < arrays.length; index++>) {
        const array: T[] = array[index]

        result = [...result, ...array]
    }
    return result
}

워후.. 이렇게 복잡하게 하는게 장점이 있으니까 하는거겠죠?...
뭔가 단순한걸 이렇게 복잡하게 하니까 궁금증이 생기네요.

