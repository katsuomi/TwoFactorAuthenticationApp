import firebase from '../firebase/firebase';
import axios from 'axios';
const QIITA_ROOT_URL = "https://qiita.com/api/v2";
export const AUTH = 'AUTH';
export const PROFILE = 'PROFILE';
export const DESCRIPTION = 'DESCRIPTION';
export const PROFILENEXT = 'PROFILENEXT';
export const PHONE_NUMBER_CONFIRM = 'PHONE_NUMBER_CONFIRM';


export const getProfile = async (dispatch) => {
  let profile = {name: "aoki"}
  await axios.get(`${QIITA_ROOT_URL}/users/katsuomi`)
  .then((response) => {    
    profile.description = response.data.description
    dispatch({
      type: PROFILE,
      profile
    })
  })
  .catch((data) => {
  })
}

export const getProfileString = async (dispatch) => {
  await axios.get(`${QIITA_ROOT_URL}/users/katsuomi`)
  .then((response) => {    
    const description = response.data.description
    dispatch({
      type: DESCRIPTION,
      description
    })
  })
  .catch((data) => {
  })
}

export const getNextProfile = (dispatch) => {
  let profile = {name: "aoki"}
  profile.password = "password"
  dispatch({
    type: PROFILENEXT,
    profile
  })
}

export const googleAuth = (dispatch) => {
  const provider =  new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then((result) => {
    console.log("success:",result)
    const current_user = result.user
    dispatch({
      type: AUTH,
      current_user
    })
  })
  .catch(err => {
    alert(err)
  })
}

export const phoneNumberConfirm = ( phoneNumber,appVerifier,dispatch ) => {
  firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
  .then((result) => {
    console.log("success:",result)
    dispatch({
      type: PHONE_NUMBER_CONFIRM,
      result
    })
  })
  .catch(err => {
    alert(err)
  })
}

export const phoneNumberAuth = ( verificationId,secretNumber,dispatch ) => {
  const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, secretNumber);
  firebase.auth().currentUser.linkAndRetrieveDataWithCredential(credential)
  .then((result) => {
    console.log("success:",result)
    const current_user = result.user
    dispatch({
      type: AUTH,
      current_user
    })
  })
  .catch(err => {
    alert(err)
  })
}
