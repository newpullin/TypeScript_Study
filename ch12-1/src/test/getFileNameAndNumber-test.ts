import {getFileNameAndNumber} from '../utils/getFileNameAndNumber'

const [filename, numberOfFakeItem] = getFileNameAndNumber('data/fake.csv', 10000)
console.log(filename, numberOfFakeItem)