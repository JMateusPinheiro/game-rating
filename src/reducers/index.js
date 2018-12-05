import {combineReducers} from 'redux';

import gameReducer from './gameReducer'
import userReducer from './userReducer'
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
    games: gameReducer,
    user: userReducer,
    loading: loadingReducer

})

export default rootReducer