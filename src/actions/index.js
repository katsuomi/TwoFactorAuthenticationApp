import firebase from '../firebase/firebase';

export const GOOGLE_AUTH = 'GOOGLE_AUTH';
export const PHONE_NUMBER_CONFIRM = 'PHONE_NUMBER_CONFIRM';
export const PHONE_NUMBER_AUTH = 'PHONE_NUMBER_AUTH';

export const googleAuth = (dispatch) => {
  const provider =  new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then((result) => {
    console.log("success:",result)
    const current_user = result.user
    dispatch({
      type: GOOGLE_AUTH,
      current_user
    })
  })
  .catch(err => {
    alert(err)
  })
}

export const phoneNumberConfirm = (phoneNumber,appVerifier,dispatch) => {
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
