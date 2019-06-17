/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import { sendPicToFirebase } from '../services/FirebaseService'

export const StateContext = React.createContext(null);

function State (props) {
  
  const [emailAddress, setEmailAddress] = useState(null);
  const [photoUUIDs, setphotoUUIDs] = useState(null);
  
  const setEmailOnLogIn = (email) => {
    setEmailAddress(email)
  }

  const addPhoto = (blob, uuid) => {
    setphotoUUIDs(uuid)
    sendPicToFirebase(blob, uuid, emailAddress)
  }
  
  return (
    <StateContext.Provider value={{ setEmailOnLogIn, addPhoto  }}>
        {props.children}
      </StateContext.Provider>
  )
}

export default State;