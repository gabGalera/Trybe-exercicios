import { SEND_REQUEST, RECEIVE_REQUEST, ERROR } from '../actions/actions'

const INITIAL_STATE = {
  infosChars: [{}],
  isLoading: false,
}

const infoReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case SEND_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case RECEIVE_REQUEST:
      return {
        infosChars: action.payload,
        isLoading: false,
      }
    case ERROR:
      return {
        infosChars: action.error,
        isLoading: false,
      }
    default:
      return state;
  }
}

export default infoReducer;
