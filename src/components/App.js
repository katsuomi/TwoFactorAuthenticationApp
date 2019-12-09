import React, { useReducer } from 'react'
import GoogleAuth from "./GoogleAuth";
import PhoneNumberAuth from "./PhoneNumberAuth";
import { useSelector } from 'react-redux'

const App = () => {
  const current_user = useSelector(state => state.auths.current_user)
  const isLogin = current_user.email === undefined ? false : true
  return (
    <>
      {isLogin  ?
        <PhoneNumberAuth />
      :
        <GoogleAuth />
      }
    </>
  );
}

export default App;
