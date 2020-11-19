import axios from 'axios'
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './UserTypes'

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        // before getting the users api, dispatch the request action
        dispatch(fetchUsersRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
            //if request is successful
            .then( response => {
                const users = response.data

                //passing in the list of users
                dispatch(fetchUsersSuccess(users))
            })
            //if fail
            .catch( error => {
                const errorMsg = error.message
                dispatch(fetchUsersFailure(errorMsg))
            })
    }
}