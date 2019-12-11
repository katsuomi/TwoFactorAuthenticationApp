import React from 'react';
import { useSelector } from 'react-redux';
import GetProfile from "./GetProfile";
import GetNextProfile from "./GetNextProfile";

const Bug = () => {
  const profile = useSelector(state => state.profiles.profile)
  const description = useSelector(state => state.profiles.description)
  const isLogin = profile.name === undefined ? false : true
  console.log(profile)
  console.log("+++++++++++++++++++++++;;;;")
  console.log(description)
  return (
    <>
      {isLogin?
        <GetNextProfile />
      :
        <GetProfile />
      }
    </>
  );
}

export default Bug;
