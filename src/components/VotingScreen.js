import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Card, CardSection, Button} from './common';
import axios from 'axios';
import firebase from 'firebase'
import { Actions } from 'react-native-router-flux';

class VotingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {pic: ''};
  }

  componentWillMount() {
    const { currentUser} = firebase.auth();
    const storage = firebase.storage();

    const norris = storage.ref(`elbuenodeChuck.jpg`)
      norris.getDownloadURL().then(url=> this.setState({pic: url}));

  const timeout = setTimeout(()=> Actions.results(), 30000);

  }

  render() {
    if (!this.state.pic) return <Text>Loading...</Text>
    return (
      <Card>
        <CardSection>
          <Image
            style={styles.imageStyle}
            source={{uri: this.state.pic}}
          />
        </CardSection>

        <CardSection>
          <Button onPress={() => {
            // firebase.storage().ref('elbuenodeChuck.jpg').getMetadata().then(metadata => {
            //   let newCounter = metadata.counter++;
            //   let newLikes = metadata.likes++;
            // const newMetadata = {
            //   counter: newCounter,
            //   likes: newLikes
            // }
            // firebase.storage().ref('elbuenodeChuck.jpg').updateMetadata(newMetadata)
            // .catch(error => 'We need to talk... something happended')
            // })
            firebase.storage().ref('mr-t.png').getDownloadURL().then(url=> this.setState({pic: url}))
            firebase.storage().ref('hannibal.jpg').getDownloadURL().then(url=> this.setState({pic: url}))
            firebase.storage().ref('Murdock.jpg').getDownloadURL().then(url=> this.setState({pic: url}))
            firebase.storage().ref('phoenix.jpg').getDownloadURL().then(url=> this.setState({pic: url}))
          }}

          >
            YES
          </Button>
          <Button onPress={ () => {
            firebase.storage().ref('mr-t.png').getDownloadURL().then(url=> this.setState({pic: url}))
            firebase.storage().ref('hannibal.jpg').getDownloadURL().then(url=> this.setState({pic: url}))
            firebase.storage().ref('Murdock.jpg').getDownloadURL().then(url=> this.setState({pic: url}))
            firebase.storage().ref('phoenix.jpg').getDownloadURL().then(url=> this.setState({pic: url}))
            }
          }>
            NO
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  imageStyle: {
    height: 400,
    width: null,
    flex: 1
  },
}
export default VotingScreen;
