import * as R from 'ramda'
console.log(
    R.range(1, 9+1)
)

const numbers: number[] = R.range(1, 9+1)
R.tap(n => console.log(n))(numbers)

const array: number[] = R.range(1, 10)
R.pipe(
    R.tap(n => console.log(n))
)(array)

export const dump = R.pipe(
    R.tap(n => console.log(n))
)

dump(R.range(1, 10))