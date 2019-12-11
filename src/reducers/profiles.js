import {
  PROFILE,
} from '../actions';

const initialState = { 
  profile: {}
}

const profiles = (state = initialState, action) => {
  switch(action.type) {
    case PROFILE:
      return {
        profile: action.profile
      }
    default:
      return state
  }
}

export default profiles
