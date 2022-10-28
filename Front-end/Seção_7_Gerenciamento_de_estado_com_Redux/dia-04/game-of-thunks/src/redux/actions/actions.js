export const SEND_REQUEST = 'SEND_REQUEST';

export const sendRequest = () => ({
  type: SEND_REQUEST
})

export const RECEIVE_REQUEST = 'RECEIVE_REQUEST';

export const receiveRequest = (payload) => ({
  type: RECEIVE_REQUEST,
  payload
})

export const ERROR = 'ERROR';

export const errorRequest = (payload) => ({
  type: ERROR,
  payload
})

export function fecthAPI(name) {
  return async (dispatch) => {
    dispatch(sendRequest());
    return fetch(`https://anapioficeandfire.com/api/characters?name=${name}`)
      .then((response) => response.json())
      .then((data) => dispatch(receiveRequest(data)))
  }
}