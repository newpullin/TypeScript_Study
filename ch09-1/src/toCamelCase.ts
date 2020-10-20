import * as R from 'ramda'

// string을 받아서 string을 반환하는 타입 지정
type StringToStringFunc= (string) => string
// to caemlCase라는 변수에 함수 지정
// delim 이라는 문자열을 받아서 , string을 받아서 string을 반환하는 함수를 반환
export const toCamelCase = (delim: string): StringToStringFunc => {
    // 그 안에는 makeFirstToCapital이라는 string을 매개변수로 바는 함수가 정의됨
    const makeFirstToCapital = (word: string) => {
        // 문자들이라는 변수에 문자를 1글자씩 저장함
        const characters = word.split('')
        // 만약 index가 0이면 대문자, 아니면 그대로 해서 배열로 만든뒤 join으로 문자열로 만듬
        return characters.map((c, index) => index == 0 ? c.toUpperCase(): c).join('')
    }
    // index 맵은 python의 enumerate와 비슷한 듯
    const indexedMap = R.addIndex(R.map)
    return R.pipe(
        // 양쪽 공백 제거
        R.trim,
        // R을 구분자로 자름
        R.split(delim),
        // R을 모두 소문자로 만듬
        R.map(R.toLower),
        //인덱스 맵을 만들고 index가 0보다 크면 첫글자를 대문자로 만듬 아니면 그대로
        indexedMap((value:string, index:number) => index > 0 ? makeFirstToCapital(value) : value),
        R.tap(a => console.log(a)),
        R.join(''),
    ) as StringToStringFunc
}


