import { FETCH_HERO_DATA } from '../actions/types';

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
    default:
      return state;
  }
}

export default heroDataReducer;
