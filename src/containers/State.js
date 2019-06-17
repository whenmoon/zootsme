/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import { sendPicToFirebase } from '../services/FirebaseService'

export const StateContext = React.createContext(null);

function State (props) {
  
  const [emailAddress, setEmailAddress] = useState(null);
  const [photoUUIDs, setphotoUUIDs] = useState(null);
  const [voteCount, setVoteCount] = useState(0);
  const setEmailOnLogIn = (email) => {
    setEmailAddress(email)
  }

  const addPhoto = (blob, uuid) => {
    setphotoUUIDs(uuid)
    sendPicToFirebase(blob, uuid, emailAddress, voteCount)
  }
  
  return (
    <StateContext.Provider value={{ setEmailOnLogIn, addPhoto}}>
        {props.children}
      </StateContext.Provider>
  )
}

export default State;