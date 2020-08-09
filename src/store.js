import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'


const logger = store => next => action => {

    let result = next(action)
    console.log(result)
    return result
}


const store = createStore(reducer, applyMiddleware(logger))

export default store;