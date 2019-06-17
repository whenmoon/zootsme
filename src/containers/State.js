/* eslint-disable no-unused-vars */
import React from 'react'
import { useState} from 'react'
import { sendPicToFirebase, getFirebaseUrls } from '../services/FirebaseService'

export const StateContext = React.createContext(null);

function State (props) {

  
  const [emailAddress, setEmailAddress] = useState(null);
  const [photoUUIDs, setphotoUUIDs] = useState(null);
  const [voteCount, setVoteCount] = useState(0);
  const [userData, setUserData] = useState([])
  const setEmailOnLogIn = async(email) => {
    setEmailAddress(email)
    const storedUserInfo = await getFirebaseUrls()
    console.log(storedUserInfo)
    const userDataArray = storedUserInfo.map(usersData =>{
      return {
        email:usersData.email,
        imageUrl: usersData.imageUrl,
        uuid: usersData.uuid,
        voteCount: usersData.voteCount
      }
    });
    console.log(userDataArray)
    setUserData(userDataArray);
  }

  const addPhoto = (blob, uuid) => {
    setphotoUUIDs(uuid)
    sendPicToFirebase(blob, uuid, emailAddress, voteCount)
  }
  
  return (
    <StateContext.Provider value={{ setEmailOnLogIn, addPhoto, userData }}>
        {props.children}
      </StateContext.Provider>
  )
}

export default State;