# 제네릭 타입 이해하기


### 제네릭 타입 제약

=> 타입 변수에 적용할 수 있는 타입의 범위를 한정하는 기능

export const printValueT = <Q, T extends IValuable<Q>>(o: T) => console.log(o.value)

T가 Ivaluable에 Q를 넣어서 만든 타입임을 알려주는 구문


* new 타입 제약

팩토리 함수는 new 연산자를 사용해 객체를 생성하는 기능을 하는 함수를 의미합니다.
이 함수는 객체를 생성하는 방법이 지나치게 복잡할 때 이를 단순화하려는 목적으로 사용됩니다.

const create = <T extends {new(): T}>(type: T): T => new type()
const create = <T>(type: new() => T):T => new type()

------이 부분 잘 이해가 안됨

그냥 T라는 타입은 new(...arg)라는 팩토리 함수에 의해서 생성되는 T로 제약한다는 뜻으로 받아들임

* 인덱스 타입 제약,

keyof T를 통해 T의 key인 변수만 받아들일 수 있음.



### 대수 데이터 타입, ADT ( algebraic data type) 

'합집합 타임' , '교집합 타입' 두가지 종류가 있음


- 합집합 타입

type NumberOrString = number | string


- 교집합 타입

const mergeObjects = <T, U>(a: T, b: U): T & U => ({...a, ...b})


* 식별 합집합 구문

객체에 'tag' 값을 주고, switch(shape.tag) 로 처리
 

### 타입 가드

* instanceof 연산자

- 객체 instanceof 타입

타입스크립트에서는 객체의 타입이 확인되면 자동으로 그 타입으로 변환해 준다.

* is 연산자를 활용한 사용자 정의 타입 가드 함수 제작

- 변수 is 타입


### F-바운드 다형성

- 타입스크립트에서 this 키워드는 타입으로도 사용됩니다.
- this가 타입으로 사용되면 객체지향 언어에서 의미하는 다형성 효과가 나는데
- 일반적인 다형성과 구분하기 위해, this 타입으로 인한 다형성을 F-바운드 다형성 이라고 합니다.

* F-바운드 타입

- F 바운드 타입이란, 자신을 구현하거나 상속하는 서브타입을 포함하는 타입을 말합니다.



=> 내가 이해한(?) 내용

export interface IAddable<T> {
    add(value: T): this
}

라는 인터페이스가 있다고 할 때 add라는 함수는
this, 즉 IAddable을 반환함
그러면 또 .add를 호출하는 식으로 쓸 수 있고
만약 그게 자기자신을 반환하는데 그 자기자신에 add도 들어있고 mulitply도 들어있으면
C().add(x).mulitply(x).add(x) 식으로 쓸 수 있다는거
그리고 만약 add 메서드가 포함된 같은 인터페이스를 상속 받은 각각 클래스 A,B에 구현되어 있으면
returnAorB.add() 는 반환되는 것에 따라서 A의 add나 B의 add를 호출하는 듯
다형성을 가진 것 처럼 행동한다

### nullable 타입

* nullable 타입이란?

변수가 초기화 되지 않으면 undefined
undefined 사실상 null과 같은 의미
타입스크립트에서 둘이 호환됨

export type nullable = undefined | null
export const nullable: nullable = undefined

그런데 이 nullable이 프로그램이 동작할 때 프로그램을
비정상으로 종료시키는 주요 원인이 됩니다.

함수형 언어에서는 이를 방지하기 위해  연산자나 클래스를 제공하기도 합니다.

* 옵션 체이닝 연산자

let longitude = person?.location?.coords?.longitude

* 널 병합 연산자

let longitude = person?.location?.coords?.longitude ?? 0
- 만약 옵션 체이닝 부분이 undefined가 되면 0을 반환하는 코드


* nullable 타입의 함수형 방식 구현

하스켈에는 Maybe란 타입이 있습니다. 스칼라 언어는 Option으로 제공합니다.
스위프트나 코틀린, 러스트와 같은 언어들도 Option혹은 Optional이라는 이름으로 이 타입을 제공합니다.


함수형 언어에서는 map이라는 메서드가 있는 타입을 '펑터(functor)'라고 부릅니다.


* Option 타입과 예외 처리

Option 타입은 부수 효과가 있는 불순 함수를 순수 함수로 만드는데 효과적입니다.
자바스크립트의 parseInt는 문자여를 수로 만들어주는데
문제는 문자열이 'hello'같은거면 NAN이라는 값을 만들어 버립니다.

따라서 Option을 써서

return isNan(value)? Option.None : Option.Some(value) 

이런식으로 처리합니다.

