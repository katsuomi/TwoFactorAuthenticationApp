import {
  AUTH,
} from '../actions';

const initialState = { 
  current_user: {}
}

const auths = (state = initialState, action) => {
  switch(action.type) {
    case AUTH:
      return {
        current_user: action.current_user
      }
    default:
      return state
  }
}

export default auths
