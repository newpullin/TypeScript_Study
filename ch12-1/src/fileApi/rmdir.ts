import rimraf, {Options} from 'rimraf'
import {fileExists} from './fileExists'

export const rmdir = (dirname: string): Promise<string> =>
    new Promise(async(resolve, reject) => {
        const alreadyExists = await fileExists(dirname)
        if(!alreadyExists) resolve(dirname)
        else {
            rimraf(dirname, error => error ? reject(error) : resolve(dirname))
        }
    })