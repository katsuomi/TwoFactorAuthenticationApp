import {
  PHONE_NUMBER_CONFIRM,
} from '../actions';

const initialState = { 
  phone_number_confirmation: {}
}

const phoneNumberConfirms = (state = initialState, action) => {
  switch(action.type) {
    case PHONE_NUMBER_CONFIRM:
      return {
        phone_number_confirmation: action.result
      }
    default:
      return state
  }
}
export default phoneNumberConfirms
