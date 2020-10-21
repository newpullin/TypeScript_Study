import {IPerson, makeIPerson} from './makeIPerson'
import {makeRandomILocation} from '../location'
import Chance from 'chance'
import * as R from 'ramda'
const c = new Chance

R.pipe(
    R.map(n => c.name()),
    R.tap(n => console.log(n))                                        
)(R.range(1, 100+1))

export const makeRandomIPerson = (): IPerson =>
makeIPerson(c.name(), c.age(), c.profession(), makeRandomILocation())