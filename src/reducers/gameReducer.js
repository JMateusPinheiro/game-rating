import {GET_GAME, EVALUATE_GAME, SET_GAMES} from '../util/staticVariables'

const gameReducer = (state = [], action) => {
    switch (action.type) {
        case SET_GAMES:
            return action.games;
        case GET_GAME:
            return state.games.find(action.game_id);
        case EVALUATE_GAME:
            return "Evaluate";
        default:
            return state;
    }
}

export default gameReducer