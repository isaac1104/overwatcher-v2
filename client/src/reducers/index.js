import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import playerDataReducer from './player_data_reducer';
import heroDataReducer from './hero_data_reducer';

const rootReducer = combineReducers({
  playerData: playerDataReducer,
  heroData: heroDataReducer,
  form: formReducer
});

export default rootReducer;
