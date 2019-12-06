import React from 'react'
import Button from '@material-ui/core/Button'
import firebase from './firebase/firebase'

const PhoneNumberAuth2 = () => {
  const [confirmationResult,setConfirmationResult ] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [secretNumber, setSecretNumber] = useState('')
  const [displayAfterPhoneNumberSubmit, setDisplayAfterPhoneNumberSubmit] = useState('')

  return (
    <>
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
    </>
  )
}

export default PhoneNumberAuth2
