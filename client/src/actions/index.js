import { REQUEST_PLAYER_DATA, RECEIVE_PLAYER_DATA, PLAYER_DATA_ERROR, RESET_PLAYER_DATA, FETCH_HERO_DATA, RESET_HERO_DATA } from './types';
import axios from 'axios';

const requestPlayerData = () => ({
  type: REQUEST_PLAYER_DATA,
  payload: true
});

const receivePlayerData = data => ({
  type: RECEIVE_PLAYER_DATA,
  payload: data
});

const playerDataError = error => ({
  type: PLAYER_DATA_ERROR,
  payload: error
});

export const resetPlayerData = () => ({
  type: RESET_PLAYER_DATA
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
  type: FETCH_HERO_DATA,
  payload: hero
});

export const resetHeroData = () => ({
  type: RESET_HERO_DATA
});
