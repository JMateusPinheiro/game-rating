import {SET_LOADING} from '../util/staticVariables'

const loadingReducer = (state = false, action) => {
    switch(action.type){
        case SET_LOADING:
            return action.loading;
        default:
            return state;
    }
}
export default loadingReducer