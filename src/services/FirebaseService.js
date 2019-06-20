/* eslint-disable no-console */
import firebase from 'firebase';

module.exports = {
  sendPicToFirebase: async (blob, uuid, emailAddress, voteCount) => {
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(uuid + '.jpg');
    await fileRef.put(blob, {
      contentType: 'image/jpeg'
    })
    firebase.storage().ref(uuid + '.jpg').getDownloadURL().then(url => {
        const photoInfo = {
          uuid,
          email: emailAddress,
          imageUrl: url,
          voteCount: voteCount
        }
        return photoInfo
      })
      .then((photoInfo) => {
        
        fetch('http://192.168.1.193:4000/photo_data', {
          'method': 'POST',
          'headers':{ 
          'content-type': 'application/json'
          },
          'body': JSON.stringify(photoInfo)
        })
        .then(res => {
          return res.status === 200 ? res : Promise.reject(res)})
        .then(res => res.json())
        .catch((err) => {
          console.log(`error`)
        });
      })
  },
  getFirebaseUrls: () => {
    return fetch('http://192.168.1.193:4000/photo_data')
    .then(res => {
      return res.status === 200 ? res : Promise.reject(res)})
    .then(res => res.json())
    .catch(err => {
      console.log(`error`)
    });

  },
  updateVote: (uuid) => {
    console.log(uuid)
    return fetch(`http://192.168.1.193:4000/photo_data/${uuid}`,{
      'method': 'PUT',
      'headers':{ 
      'content-type': 'application/json'
      },
      'body': ''
    })
    .then(res => {
      return res.status === 204 ? res : Promise.reject(res)})
    .catch((err) => {
      console.log(`error`)
    });
  }

};







