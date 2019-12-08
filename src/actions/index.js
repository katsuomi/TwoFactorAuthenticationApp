import firebase from '../firebase/firebase';

export const GOOGLE_AUTH = 'GOOGLE_AUTH';
export const PHONE_AUTH = 'PHONE_AUTH';

export const googleAuth = () => {
  console.log("+++++++++++++++++")
  const provider =  new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then((result) => {
    console.log("success:",result)
    const current_user = result.user
    // dispatch({
    //   type: GOOGLE_AUTH,
    //   current_user
    // })
  })
  .catch(err => {
    alert(err)
  })
}
