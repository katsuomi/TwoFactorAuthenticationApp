import React from 'react';
import { useDispatch } from 'react-redux';
import { getProfile,getProfileString } from "../actions";

import Button from '@material-ui/core/Button';

const GetProfile = () => {
  const dispatch = useDispatch()
  const SubmitGoogleAuth = () => {
    getProfileString(dispatch)
  }

  return (
    <div style={{textAlign: "center" ,marginTop: "60px"}}>
      <Button variant="contained" color="secondary" onClick={SubmitGoogleAuth} style={{width: "200px"}}>
        GetProfileする。
      </Button>
    </div>
  )
}

export default GetProfile
