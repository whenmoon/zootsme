/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
// import console = require('console');

export const StateContext = React.createContext(null);

function State (props) {
  
  const [emailAddress, setEmailAddress] = useState(null);
  const [photoUUIDs, setphotoUUIDs] = useState(null);
  
  
  const setEmailOnLogIn = (email) => {
    setEmailAddress(email)
  }

  const addPhotoUUIDs = (uuid) => {
    setphotoUUIDs(uuid)
    console.log(uuid);
  }
  
  return (
    <StateContext.Provider value={{ setEmailOnLogIn, addPhotoUUIDs}}>
        {props.children}
      </StateContext.Provider>
  )
}

export default State;