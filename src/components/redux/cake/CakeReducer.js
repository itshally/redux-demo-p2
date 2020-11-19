import { BUY_CAKE } from './CakeTypes'
/* -------------------------- Define initial state -------------------------- */

const initialState = {
    numOfCakes: 10
}

/* ------------------------- Define Reducer function ------------------------ */

const cakeReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - action.payload
        }
        default: return state
    }
}

export default cakeReducer