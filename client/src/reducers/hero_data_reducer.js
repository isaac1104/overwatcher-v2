import { FETCH_HERO_DATA, RESET_HERO_DATA } from '../actions/types';

const INITIAL_STATE = {
  data: {}
}

function heroDataReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_HERO_DATA:
      return {
        ...state,
        data: action.payload
      };
    case RESET_HERO_DATA:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default heroDataReducer;
