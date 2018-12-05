import {GET_GAME,EVALUATE_GAME, SET_GAMES} from '../util/staticVariables'

export const setGames = games => ({
    type: SET_GAMES,
    games: games
})
export const getGame = game_id => ({
    type: GET_GAME,
    game: game_id
})
export const evaluateGame = note => ({
    type: EVALUATE_GAME,
    note: note
})