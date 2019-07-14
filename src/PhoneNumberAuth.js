import React, { Component } from 'react';
import firebase from './firebase/firebase'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class PhoneNumberAuth extends Component {
  constructor(){
    super()
    this.SubmitPhoneNumber = this.SubmitPhoneNumber.bind(this)
    this.SubmitSecretNumber = this.SubmitSecretNumber.bind(this)
    this.OnChangePhoneNumber = this.OnChangePhoneNumber.bind(this)
    this.OnChangeSecretNumber = this.OnChangeSecretNumber.bind(this)
    this.state={
      confirmationResult: null,
      phoneNumber: "",
      secretNumber: "",
      displayAfterPhoneNumberSubmit: null,
    }
  }

  componentDidMount(){
    firebase.auth().languageCode = 'jp';
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': function(response) {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.SubmitPhoneNumber();
      }
    });
  }
  

  async SubmitPhoneNumber(){
    const phoneNumber = this.state.phoneNumber
    const appVerifier = window.recaptchaVerifier;
    const confirmationResult = await firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    this.setState({confirmationResult: confirmationResult,displayAfterPhoneNumberSubmit: true})
  }

  async SubmitSecretNumber(){
    const secretNumber = this.state.secretNumber
    const credential = await firebase.auth.PhoneAuthProvider.credential(this.state.confirmationResult.verificationId, secretNumber);
    await firebase.auth().currentUser.linkAndRetrieveDataWithCredential(credential)
  }

  OnChangePhoneNumber(e) {
    e.preventDefault();
    this.setState({
      phoneNumber: "+81"+e.target.value
    });
  }

  OnChangeSecretNumber(e) {
    e.preventDefault();
    this.setState({
       secretNumber: e.target.value
    });
  }



  render() {
    return (
      <React.Fragment>
        <div style={{textAlign: "center",marginTop: "20px"}}>
          <div id="recaptcha-container">
            <TextField
            style={{width: "200px"}}
            onChange={this.OnChangePhoneNumber}
            placeholder="電話番号を入力"
            />
            <br/><br/>
            <Button variant="contained" color="primary" id="sign-in-button" onClick={this.SubmitPhoneNumber} style={{width: "200px"}}>
              秘密番号を送信
            </Button>
          </div>
          <br/><br/>
          <div style={{ display: this.state.displayAfterPhoneNumberSubmit ? '' : 'none' }}>
            <TextField
              onChange={this.OnChangeSecretNumber}
              style={{width: "200px"}}
              placeholder="6桁の秘密番号を入力してください。"
            />
            <br/><br/>
            <Button variant="contained" color="primary" id="sign-in-button" onClick={this.SubmitSecretNumber} style={{width: "200px"}}>
              認証
            </Button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}


export default PhoneNumberAuth

