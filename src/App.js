import React from 'react';
import './App.css';
import GoogleAuth from "./GoogleAuth"
import PhoneNumberAuth from "./PhoneNumberAuth"

const App = () => {
  return (
    <>
      <GoogleAuth />
      <PhoneNumberAuth />
    </>
  );
}

export default App;
