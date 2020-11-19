import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {

    /**
     * This function is called the selector function
     * This function receives the redux state as its argument which is similar
     * to the mapStateToProps function. Then, it can return a value
     */
    const numOfCakes = useSelector( state => state.cake.numOfCakes )

    /**
     * This function returns a reference to the dispatch function from the 
     * redux store
     */

     const dispatch = useDispatch()

    return (
        <div>
            <h2>Number of Cakes: {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer
 
/* ------------------------------- useSelector ------------------------------ */

/**
 * it is a hook that the react-redux library provides which acts as a closed
 * equivalent to the mapStateToProps function
 */