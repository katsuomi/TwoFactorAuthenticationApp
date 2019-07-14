import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import firebase from './firebase/firebase'

class GoogleAuth extends Component {
  constructor(){
    super()
    this.SubmitGoogleAuth = this.SubmitGoogleAuth.bind(this);
  }


  async SubmitGoogleAuth(){
    const provider = await new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider)
  }

  render() {
    return (
      <div style={{textAlign: "center" ,marginTop: "60px"}}>
        <Button variant="contained" color="secondary" onClick={this.SubmitGoogleAuth} style={{width: "200px"}}>
          GoogleでLogin
        </Button>
      </div>
    )
  }
}



export default GoogleAuth