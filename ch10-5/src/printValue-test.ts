import {printValue, Valuable, IValuable} from './printValue'

printValue(new Valuable(1))
printValue(new Valuable('Hello'))
printValue(new Valuable(true))
printValue(new Valuable([1,2,3]))