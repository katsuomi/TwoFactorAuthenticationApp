import {
  GOOGLE_AUTH,
  PHONE_AUTH,
} from '../actions'

const auths = (state = [], action) => {
  switch(action.type) {
    case GOOGLE_AUTH:
      return []
    case PHONE_AUTH:
      return []
    default:
      return state
  }
}

export default auths
