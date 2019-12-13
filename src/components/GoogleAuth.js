import React from 'react';
import { useActions } from "../actions";
import Button from '@material-ui/core/Button';

const GoogleAuth = () => {
  const [ googleAuth ] = useActions()
  const SubmitGoogleAuth = () => {
    googleAuth()
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
