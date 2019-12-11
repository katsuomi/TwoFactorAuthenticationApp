import {
  PROFILE,PROFILENEXT,DESCRIPTION
} from '../actions';

const initialState = { 
  profile: {},
  description: ""
}

const profiles = (state = initialState, action) => {
  switch(action.type) {
    case PROFILE:
      return {
        profile: action.profile
      }
    case PROFILENEXT:
      return {
        profile: action.profile
      }
    case DESCRIPTION:
      return {
        description: action.description,
        profile: {}
      }
    default:
      return state
  }
}

export default profiles
