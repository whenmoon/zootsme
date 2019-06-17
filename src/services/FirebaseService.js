import firebase from 'firebase';
// import { writePhotoDataToDatabase } from './databaseService' 

exports.sendPicToFirebase = (blob, uuid, emailAddress) => {
  const storageRef = firebase.storage().ref();
  const fileRef = storageRef.child(uuid + '.jpg');
  fileRef.put(blob, {
    contentType: 'image/jpeg'
  })
  firebase.storage().ref(uuid + '.jpg').getDownloadURL().then(url => {

    console.log(uuid, emailAddress, url)

  })
  // writePhotoDataToDatabase(uuid, emailAddress, url, 1)
}
