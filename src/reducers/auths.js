import {
  GOOGLE_AUTH,
  PHONE_NUMBER_AUTH,
  PHONE_NUMBER_CONFIRM,
} from '../actions'

const initialState = { 
  current_user: {},
  phone_number_confirmation: {}
}

const auths = (state = initialState, action) => {
  switch(action.type) {
    case GOOGLE_AUTH:
      return {
        current_user: action.current_user
      }
    case PHONE_NUMBER_CONFIRM:
      return {
        phone_number_confirmation: action.result
      }
    case PHONE_NUMBER_AUTH:
      return []
    default:
      return state
  }
}

export default auths
