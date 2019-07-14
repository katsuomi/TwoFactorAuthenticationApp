import React from 'react';
import './App.css';
import GoogleAuth from "./GoogleAuth"
import PhoneNumberAuth from "./PhoneNumberAuth"

function App() {
  return (
    <div>
      <GoogleAuth />
      <PhoneNumberAuth />
    </div>
  );
}

export default App;



