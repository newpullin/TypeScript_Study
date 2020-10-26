import {getJokeAsMaybe, IMaybe} from '../getJokeAsMaybe'

(async() => {
    const joke: IMaybe<string> = await getJokeAsMaybe()
    console.log(joke.getOrElse('something wrong'))
})()

// getRandomJoke()
//     .then((JokeItem: JokeType) => {
//         const joke = R.view(R.lensProp('joke'))(JokeItem)
//         console.log(joke)
//     })
//     .catch((e: Error) => console.log(e.message))