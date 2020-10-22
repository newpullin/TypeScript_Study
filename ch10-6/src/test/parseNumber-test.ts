import {parseNumber} from '../option/parseNumber'

let value = parseNumber('1')
.map(value => value + 4)
.map(value => value * 10)
.getOrElse(0)

console.log(value)

value = parseNumber('dmkwlqmkd')
.map(value => value + 4)
.getOrElse(0)

console.log(value)