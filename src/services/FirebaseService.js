import firebase from 'firebase';
const axios = require('axios');

exports.sendPicToFirebase = async (blob, uuid, emailAddress, voteCount) => {
  const storageRef = firebase.storage().ref();
  const fileRef = storageRef.child(uuid + '.jpg');
  await fileRef.put(blob, {
    contentType: 'image/jpeg'
  })
  firebase.storage().ref(uuid + '.jpg').getDownloadURL().then(url => {
    const photoInfo = {uuid,
    email: emailAddress,
    imageUrl: url,
    voteCount: voteCount}
    console.log(photoInfo);
    return photoInfo})
    .then((photoInfo) =>{ 
    console.log(photoInfo);
    axios.post('http://192.168.1.193:4000/photo_data', {
      photoInfo
    })
    .then(function (response) {
    console.log('hello')
    console.log(response);
    })
    .catch(function (error) {
    // handle error
    console.log(error);
    }) 
  })
}  







