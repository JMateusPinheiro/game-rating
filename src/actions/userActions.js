import {GET_USER, CREATE_USER} from '../util/staticVariables.js'

export const getUser = user_id =>({
    type: GET_USER,
    user_id: user_id
})

export const createUser = user => ({
    type: CREATE_USER,
    user: user
})