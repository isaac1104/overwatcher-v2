import { REQUEST_PLAYER_DATA, RECEIVE_PLAYER_DATA, PLAYER_DATA_ERROR } from './types';
import axios from 'axios';

const requestPlayerData = () => ({
  type: REQUEST_PLAYER_DATA,
  payload: true
});

const receivePlayerData = data => ({
  type: RECEIVE_PLAYER_DATA,
  payload: data
});

export const fetchPlayerData = battletag => async dispatch => {
  dispatch(requestPlayerData);
  const request = await axios.get('/api/playerData', {
    params: {
      battletag
    }
  });
  const { data } = request;
  dispatch(receivePlayerData(data));
}
