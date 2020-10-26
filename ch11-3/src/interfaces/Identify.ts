import {IValuable} from './IValuable'

export class Identity<T> implements IValuable<T> {
    constructor(private _value: T) {}
    value() {return this._value}
}