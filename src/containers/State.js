/* eslint-disable no-unused-vars */
import React from 'react'
import { useState} from 'react'
import { sendPicToFirebase, getFirebaseUrls,updateVote  } from '../services/FirebaseService'

export const StateContext = React.createContext(null);

function State (props) {

  
  const [emailAddress, setEmailAddress] = useState(null);
  const [photoUUIDs, setphotoUUIDs] = useState(null);
  const [voteCount, setVoteCount] = useState(0);
  const [userData, setUserData] = useState([])
  const [winningScreen, setWinningScreen] = useState('');

  const setEmailOnLogIn = async(email) => {
    setEmailAddress(email)
    const storedUserInfo = await getFirebaseUrls()
    const userDataArray = storedUserInfo.map(usersData =>{
      return {
        email:usersData.email,
        imageUrl: usersData.imageUrl,
        uuid: usersData.uuid,
        voteCount: usersData.voteCount
      }
    });
    setUserData(userDataArray);
  }

  const voteYes =(uuid)=>{
    console.log(uuid);
    updateVote(uuid);
  }
   
  // const setWinningScreen = () => {
  //   const userData  = await getFirebaseUrls()
  //   const maxCount = 0;
  //   let winningUrl = '';
  //   userData.forEach(photo => {
  //     // need logic for a tie
  //     if (photo.voteCount > maxCount) winningUrl = photo.imageUrl
  //   })
  //   return winningUrl;
  // }  

  const addPhoto = async (blob, uuid) => {
    setphotoUUIDs(uuid)
    const newPhoto = await sendPicToFirebase(blob, uuid, emailAddress, voteCount);
    console.log(newPhoto, 'new Photo');
  }
  
  return (
    <StateContext.Provider value={{ setEmailOnLogIn, addPhoto, userData, voteYes,setWinningScreen, winningScreen }}>
        {props.children}
      </StateContext.Provider>
  )
}

export default State;