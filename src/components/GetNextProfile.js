import React from 'react';
import { useDispatch } from 'react-redux';
import { getNextProfile } from "../actions";

import Button from '@material-ui/core/Button';

const GetNextProfile = () => {
  const dispatch = useDispatch()
  const SubmitGoogleAuth = () => {
    getNextProfile(dispatch)
  }

  return (
    <div style={{textAlign: "center" ,marginTop: "60px"}}>
      <Button variant="contained" color="secondary" onClick={SubmitGoogleAuth} style={{width: "200px"}}>
        GetProfileする。2222
      </Button>
    </div>
  )
}

export default GetNextProfile
