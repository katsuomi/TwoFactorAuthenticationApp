import React from 'react'
import Button from '@material-ui/core/Button'
import firebase from './firebase/firebase'

const GoogleAuth = () => {
  const SubmitGoogleAuth = () => {
    const provider =  new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
  }

  return (
    <div style={{textAlign: "center" ,marginTop: "60px"}}>
      <Button variant="contained" color="secondary" onClick={SubmitGoogleAuth} style={{width: "200px"}}>
        GoogleでLogin
      </Button>
    </div>
  )
}

export default GoogleAuth
