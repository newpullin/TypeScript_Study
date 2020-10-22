import {IValuable} from './Valuable'

export const printValue = <Q, T extends IValuable<Q>>(o: T): void => console.log(o.value)

export {IValuable}

