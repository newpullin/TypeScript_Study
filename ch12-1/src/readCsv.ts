import {getFileNameAndNumber} from './utils'
import {csvFileReaderGenerator} from './csv/FileReaderGenerator'

const [filename] = getFileNameAndNumber('./data/fake-10000.csv', 1)

let line = 1
for(let object of csvFileReaderGenerator(filename)) {
    console.log(`[${line++}] ${JSON.stringify(object)}`)
}

console.log('\n read complete')
