import * as R from 'ramda'
import { makeRandomIPerson } from './model/person'

type voidToNumberFunc = () => number

const makeRandomNumber = (max: number) : voidToNumberFunc => () : number => Math.floor(Math.random() * max)

const array = R.range(1, 5 + 1).map(makeRandomNumber(100))
const sortedArray = R.sort( (a:number, b:number):number => b-a )(array)

console.log(array, sortedArray)
