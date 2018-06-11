import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import playerDataReducer from './player_data_reducer';
import heroDataReducer from './hero_data_reducer';

const appReducer = combineReducers({
  playerData: playerDataReducer,
  heroData: heroDataReducer,
  form: formReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_PLAYER_DATA') {
    state.playerData = undefined;
  }
  if (action.type === 'RESET_HERO_DATA') {
    state.heroData = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
