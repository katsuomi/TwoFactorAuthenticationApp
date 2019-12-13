import firebase from '../firebase/firebase';
import { useDispatch } from 'react-redux';

export const AUTH = 'AUTH';
export const PHONE_NUMBER_CONFIRM = 'PHONE_NUMBER_CONFIRM';

export const useActions = () => {
  const dispatch = useDispatch();
  const googleAuth = () => {
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

  const phoneNumberConfirm = ( phoneNumber,appVerifier ) => {
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
  
  const phoneNumberAuth = ( verificationId,secretNumber ) => {
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

  return [ googleAuth,phoneNumberConfirm,phoneNumberAuth ]
}
