import * as actions from './types';
import axios from 'axios';

const requestPlayerData = () => ({
  type: actions.REQUEST_PLAYER_DATA,
  payload: true
});

const receivePlayerData = data => ({
  type: actions.RECEIVE_PLAYER_DATA,
  payload: data
});

const playerDataError = error => ({
  type: actions.PLAYER_DATA_ERROR,
  payload: error
});

export const resetPlayerData = () => ({
  type: actions.RESET_PLAYER_DATA
});

export const fetchPlayerData = battletag => async dispatch => {
  dispatch(requestPlayerData());
  const request = await axios.get('/api/playerData', {
    params: {
      battletag
    }
  });
  const { data } = request;
  if (data.error) {
    dispatch(playerDataError(data.error));
  } else {
    dispatch(receivePlayerData(data));
  }
}

export const fetchHeroData = hero => ({
  type: actions.FETCH_HERO_DATA,
  payload: hero
});

export const resetHeroData = () => ({
  type: actions.RESET_HERO_DATA
});
