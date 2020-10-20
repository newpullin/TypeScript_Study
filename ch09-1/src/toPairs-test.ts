import * as R from 'ramda'
import {IPerson, makeRandomIPerson} from './model/person'


const person: IPerson = makeRandomIPerson()
const pairs: [string, any][] = R.toPairs(person)

console.log(pairs)

const rePerson: IPerson = R.fromPairs(pairs) as IPerson

console.log('person', rePerson)