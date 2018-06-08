import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import playerDataReducer from './player_data_reducer';

const rootReducer = combineReducers({
  playerData: playerDataReducer,
  form: formReducer
});

export default rootReducer;
