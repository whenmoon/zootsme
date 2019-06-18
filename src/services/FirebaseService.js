import firebase from 'firebase';
const axios = require('axios');

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
        //console.log(photoInfo);
        return photoInfo
      })
      .then((photoInfo) => {
        //console.log(photoInfo);
        fetch('http://192.168.1.193:4000/photo_data', {
          'method': 'POST',
          'headers':{ 
          'content-type': 'application/json'
          },
          'body': JSON.stringify(photoInfo)
        })
          .then(function (response) {
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
      })
  },
  getFirebaseUrls: () => {
    console.log('hello')
    return fetch('http://192.168.1.193:4000/photo_data')
    .then(res => {
      return res.status === 200 ? res : Promise.reject(res)})
    .then(res => res.json())
    .catch((err) => {
      console.log(`error`)
    });

  }

};







