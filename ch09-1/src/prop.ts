import * as R from 'ramda'
import {IPerson, makeRandomIPerson} from './model/person'


const person: IPerson = makeRandomIPerson()

const getName = R.pipe(
    R.prop('name'),
    R.tap(name => console.log(name))
)

const originalName = getName(person)
const modifiedPerson = R.assoc('name', 'A E')(person)
const modifiedName = getName(modifiedPerson)

