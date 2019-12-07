import {
  GOOGLE_AUTH,
  PHONE_AUTH,
  CURRENT_USER 
} from '../actions'

const auths = (state = [], action) => {
  switch(action.type) {
    case GOOGLE_AUTH:
      return []
    case PHONE_AUTH:
      return []
    case CURRENT_USER:
      return []
    default:
      return state
  }
}

export default auths
