import { combineReducers } from 'redux'
import auths from './auths'
import profiles from './profiles'
import phoneNumberConfirms from './phoneNumberConfirms'

export default combineReducers({
  auths,phoneNumberConfirms,profiles
})
