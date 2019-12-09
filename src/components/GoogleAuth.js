import React from 'react';
import { useDispatch } from 'react-redux';
import { googleAuth } from "../actions";

import Button from '@material-ui/core/Button';

const GoogleAuth = () => {
  const dispatch = useDispatch()
  const SubmitGoogleAuth = () => {
    googleAuth(dispatch)
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
