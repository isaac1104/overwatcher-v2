import { REQUEST_PLAYER_DATA, RECEIVE_PLAYER_DATA } from '../actions/types';

const INITIAL_STATE = {
  isFetching: false,
  data: []
}

function playerDataReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_PLAYER_DATA:
      return {
        ...state,
        isFetching: action.payload
      }
    case RECEIVE_PLAYER_DATA:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      }
    default:
      return state
  }
}

export default playerDataReducer;
