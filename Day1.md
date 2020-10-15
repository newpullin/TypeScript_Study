# 타입스크립트

* 타입스크립트를 쓰는 이유

자바스크립트에 타입을 표현하면, 버그 잡는게 편하다.
그래서 대규모 프로젝트에서 많이 사용함.

* 트랜스파일

ESNext 자바스크립트 코드는 바벨이라는 트랜스파일러를 거치면
ES5 자바스크립트 코드로 변환됩니다.
바벨과 유사하게 TS 소스코드는 TSC라는 트랜스파일러를 통해 ES5 로 변환됩니다.

# ESNext 주요 문법

* 비구조화 할당

let person = {name: "Jane", age: 22}
let {name, age} = person 

let array = [1, 2, 3, 4]
let [head, ...rest] = array  // head = 1, rest = [2, 3, 4]

let a = 1, b = 2
[a, b] = [b, a] //swap

* 화살표 함수

const add = (a, b) => a + b

* 클래스

* 모듈

* 생성기

function* gen() {
    yield* [1, 2]
}

for(let value of gen()) { console.log(value)} // 1, 2

* Promise + async/await


# 타입스크립트 고유의 문법


(1) 타입 주석과 타입 추론

let n:number = 1 이런식으로 세미콜론 옆에 타입을 쓰는걸 타입 주석

let n = 2 , 이런식으로 대입된 값으로 타입을 결정해주는 것을 타입 추론이라고 합니다.

타입추론 덕분에 js파일을 ts로 바꿔도 실행 가능

(2) 인터페이스

(3) 튜플

배열에 다른 타입들이 저장되어 있으면 튜플

let tuple: [boolean, bumber, string] = [true, 1, 'OK'] // 튜플

(4) 제네릭 타입

class Container<T> {
    constructor(public value: T) {}
}

let numberContainer : Container<number> = new Container<number>(1)
let stringContainer : Container<string> = new Container<string>('Hello world')

(5) 대수타입

type NumberOrString = number |string
type AnimalAndPerson = Animal &persion




