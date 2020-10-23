import {IFunctor} from './IFuncotr'

export interface IApply<T> extends IFunctor<T> {
    ap<U>(b: U);
}