import {Success, Failure} from '../classes/Validation'

export const checkLength = (o: {password?: string}, minLength: number = 6) => {
    const {password} = o
    return (!password || password.length < minLength) ?
        new Failure(['Password mus have more than 6 characters']) : new Success(o)
}
