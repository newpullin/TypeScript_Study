import {readFileGenerator} from '../fileApi'

for(let value of readFileGenerator('data/fake-10000.csv')) {
    console.log('<line>', value, '</line>')
    break // 첫 줄만 출력
}