import IPerson from './person/IPerson'
import Chance from 'chance'
import * as R from 'ramda'
import Person from './person/Person'

const chance = new Chance()
let persons: IPerson[] = R.range(0, 2).map((n:number) => new Person(chance.name(), chance.age()))

console.log(persons)