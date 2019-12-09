import React from 'react';
import { useSelector } from 'react-redux';
import GoogleAuth from "./GoogleAuth";
import PhoneNumberAuth from "./PhoneNumberAuth";

const App = () => {
  const current_user = useSelector(state => state.auths.current_user)
  const isLogin = current_user.email === undefined ? false : true
  console.log(current_user.email)
  console.log(current_user.phoneNumber)
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
