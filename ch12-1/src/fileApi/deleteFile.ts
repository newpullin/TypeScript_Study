import { rejects } from 'assert'
import * as fs from 'fs'
import { resolve } from 'path'
import {fileExists} from './fileExists'

export const deleteFile = (filename: string) : Promise<string> =>
    new Promise<any>(async(resolve, reject) => {
        const alreadyExists = await fileExists(filename)
        !alreadyExists ? resolve(filename) : fs.unlink(filename, (error) => error ? reject(error) : resolve(filename))
    })