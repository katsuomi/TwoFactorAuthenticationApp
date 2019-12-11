import React from 'react';
import { useSelector } from 'react-redux';
import GetProfile from "./GetProfile";
import GetNextProfile from "./GetNextProfile";

const Bug = () => {
  const profile = useSelector(state => state.profiles.profile)
  const isLogin = profile.name === undefined ? false : true
  console.log(profile)
  console.log(profile)
  return (
    <>
      {isLogin  ?
        <GetNextProfile />
      :
        <GetProfile />
      }
    </>
  );
}

export default Bug;
