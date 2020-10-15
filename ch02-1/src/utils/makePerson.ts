export function makePerson(name: string, age: number) {
    return {name: name, age: age}
}

export function testMakePerson(){
    console.log(
        makePerson('Choi', 27),
        makePerson('Bae', 25)
    )
}