import {Nothing, Just} from '../classes/Maybe'

console.log(
    Nothing.of().isJust(),
    Nothing.of().isNothing(),
    Nothing.of().getOrElse(1),
    Nothing.of().map(x => x + 1).getOrElse(1),
    Nothing.of().ap(1).getOrElse(1),
    Nothing.of().chain(Just.of).getOrElse(1),
)