import {CREATE_USER, GET_USER} from '../util/staticVariables'
import axios from 'axios'

const userReducer = (state = [], action) =>{
    switch (action.type) {
        case CREATE_USER:
            axios.post(url, {
                params: {
                    id:paramId
                }
            })
            .then(function (response) {
            })
            .catch(function (error) {
            })

            return 
        case GET_USER:

        default:
            return state;
    }
}
export default userReducer;