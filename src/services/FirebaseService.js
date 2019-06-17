import firebase from 'firebase';
// import { writePhotoDataToDatabase } from './databaseService' 

exports.sendPicToFirebase = async (blob, uuid, emailAddress, voteCount) => {
  const storageRef = firebase.storage().ref();
  const fileRef = storageRef.child(uuid + '.jpg');
  await fileRef.put(blob, {
    contentType: 'image/jpeg'
  })
  firebase.storage().ref(uuid + '.jpg').getDownloadURL().then(url => {

    console.log(uuid, emailAddress, url)
     
  })  
  






}
