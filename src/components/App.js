import React, { useReducer } from 'react'
import GoogleAuth from "./GoogleAuth";
import PhoneNumberAuth from "./PhoneNumberAuth";
import AppContext from "../contexts/AppContext"
import reducer from '../reducers'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  return (
    <>
      <AppContext.Provider value={{state,dispatch}} >
        <GoogleAuth />
        <PhoneNumberAuth />
      </AppContext.Provider>
    </>
  );
}

export default App;
