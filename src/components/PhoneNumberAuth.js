import React, { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { phoneNumberConfirm } from "../actions";
import firebase from '../firebase/firebase';

const PhoneNumberAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [secretNumber, setSecretNumber] = useState('')
  const dispatch = useDispatch()
  useEffect(() => {
    doRecaptcha();
  },[])

  const doRecaptcha = () => {
    firebase.auth().languageCode = 'jp';
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': function(response) {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.SubmitPhoneNumber();
      }
    });
  }

  const SubmitPhoneNumber = () => {
    const appVerifier = window.recaptchaVerifier;
    phoneNumberConfirm(phoneNumber,appVerifier,dispatch)
  }

  const SubmitSecretNumber = () => {
    // const credential = firebase.auth.PhoneAuthProvider.credential(confirmationResult.verificationId, secretNumber);
    // firebase.auth().currentUser.linkAndRetrieveDataWithCredential(credential)
  }

  return (
    <>
      <div style={{textAlign: "center",marginTop: "20px"}}>
        <p>googleログインしました。電話番号で認証してください</p>
        <div id="recaptcha-container">
          <TextField
            style={{width: "200px"}}
            onChange={(e) => setPhoneNumber('+81'+e.target.value)}
            placeholder="電話番号を入力"
          />
          <br/><br/>
          <Button variant="contained" color="primary" id="sign-in-button" onClick={SubmitPhoneNumber} style={{width: "200px"}}>
            秘密番号を送信
          </Button>
        </div>
        <br/><br/>
        <div> {/* style={{ display: displayAfterPhoneNumberSubmit ? '' : 'none' }} */}
          <TextField
            onChange={(e) => {setSecretNumber(e.target.value)}}
            style={{width: "200px"}}
            placeholder="6桁の秘密番号を入力してください。"
          />
          <br/><br/>
          <Button variant="contained" color="primary" id="sign-in-button" onClick={SubmitSecretNumber} style={{width: "200px"}}>
            認証
          </Button>
        </div>
      </div>
    </>
  )
}

export default PhoneNumberAuth
