import firebase from 'firebase';
// import { writePhotoDataToDatabase } from './databaseService' 

exports.sendPicToFirebase = (blob, uuid, emailAddress) => {
  const storageRef = firebase.storage().ref();
  const fileRef = storageRef.child(uuid + '.jpg');
  fileRef.put(blob, {
    contentType: 'image/jpeg'
  })
  // firebase.storage().ref(uuid + '.jpg').getDownloadURL().then(url => {

    // writePhotoDataToDatabase(uuid, emailAddress, url, 1)

    firebase.database().ref('photos/' + uuid).set({
      uuid: uuid,
      email: 'tom@tom.com',
      imageUrl: "Tom",
      voteCount: 1
    })
}



