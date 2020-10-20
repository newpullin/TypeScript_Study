import * as R from 'ramda'

const incNumbers = R.pipe(
    R.map(R.add(1)),
    R.tap(a => console.log('affter add(1):', a))

)
const newNumbers = incNumbers(R.range(1, 9+1))