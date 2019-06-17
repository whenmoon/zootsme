import firebase from 'firebase';
// import { writePhotoDataToDatabase } from './databaseService' 

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
    return fetch('http://localhost:4000/photo_data',{
      'method': 'POST',
      'headers':{ 
      'content-type': 'application/json'
      },
      'body': JSON.stringify(photoInfo)
    }) .then(res => {
      console.log('hello')
      return res.status === 200 ? res : Promise.reject(res)})
  })
   
    .catch((err) => {
      console.log(`${err.message} while fetching /${url}`)
    });

}  







