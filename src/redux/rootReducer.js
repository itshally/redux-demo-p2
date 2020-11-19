import { combineReducers } from 'redux'
import cakeReducer from './cake/CakeReducer'
import iceCreamReducer from './icecream/IceCreamReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

export default rootReducer