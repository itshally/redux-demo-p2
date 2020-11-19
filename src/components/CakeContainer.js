/**
 * This is the component where the number of cakes will be displayed 
 * and where the buyCake action will be dispatched based from a 
 * button click
 */

import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../components/redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of Cakes: {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

/* ----------------------------- mapStateToProps ---------------------------- */

/**
 * This function gets the redux state as a parameter and returns an object
 */

const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}

/* ----------------------------- mapStateToProps ---------------------------- */

/**
 * This function gets the redux dispatch method as a parameter and returns an object
 */
const mapDispatchToProps = dispatch => {
    return {
        buyCake : () => dispatch(buyCake())
    }
}

/**
 * What does this connect() method do?
 * 
 * -- the mapStateToProps is mapped to the component props, so apart from
 * whatever the cake container was receiving, it will now receive additional
 * prop called numOfCakes
 * 
 * -- the mapDispatchToProps will map the dispatch of an action creator to
 * a prop in the component. So, the component will now receive a second 
 * additional prop called buyCake which will dispatch this buyCake action
 */
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)