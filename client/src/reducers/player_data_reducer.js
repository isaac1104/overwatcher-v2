import { REQUEST_PLAYER_DATA, RECEIVE_PLAYER_DATA, PLAYER_DATA_ERROR, RESET_PLAYER_DATA } from '../actions/types';

const INITIAL_STATE = {
  isFetching: false,
  error: false,
  data: {}
}

function playerDataReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_PLAYER_DATA:
      return {
        ...state,
        isFetching: action.payload,
      };
    case RECEIVE_PLAYER_DATA:
      return {
        ...state,
        isFetching: false,
        error: false,
        data: action.payload
      };
    case PLAYER_DATA_ERROR:
      return {
        ...state,
        isFetching: false,
        error: true,
        data: action.payload
      };
    case RESET_PLAYER_DATA:
      return {
        ...state,
        isFetching: false,
        error: false,
        data: {}
      };
    default:
      return state;
  }
}

export default playerDataReducer;
