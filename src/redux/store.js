/* -------------------------------------------------------------------------- */
/*             This file uses the createStore() method from redux             */
/* -------------------------------------------------------------------------- */

import { createStore, applyMiddleware } from 'redux'
import cakeReducer from './cake/CakeReducer'
import rootReducer from './rootReducer'
import thunk from 'redux-thunk'

/**
 * The create store method accepts a reducer function as its parameter.
 */

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store

/**
 * This store is to be provided to the React app and this is where the react-redux
 * library makes its first appearance.The react-redux library exports a component
 * called Provider where it is used to prove a redux store to the react app.
 */