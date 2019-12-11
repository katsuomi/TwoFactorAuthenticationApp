import firebase from '../firebase/firebase';

export const AUTH = 'AUTH';
export const PROFILE = 'PROFILE';
export const PHONE_NUMBER_CONFIRM = 'PHONE_NUMBER_CONFIRM';


export const getProfile = (dispatch) => {
  let profile = {name: "aoki"}
  dispatch({
    type: PROFILE,
    profile
  })
}

export const getNextProfile = (dispatch) => {
  let profile = {name: "aoki"}
  let profile = {name: "aoki"}
  dispatch({
    type: PROFILE,
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
