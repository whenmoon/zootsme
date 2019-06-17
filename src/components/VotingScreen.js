import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Card, CardSection, Button} from './common';
import axios from 'axios';
import firebase from 'firebase'
import { Actions } from 'react-native-router-flux';
// import console = require('console');

// console.log('STORAGE:', firebase.storage());
class VotingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {pic: ''};
  }

  componentWillMount() {
    // const { currentUser} = firebase.auth();

    const storage = firebase.storage();
    // get saved pic
   // const norris = storage.ref(`elbuenodeChuck.jpg`)
   // norris.getDownloadURL().then(url=> this.setState({pic: url}));
    const timeout = setTimeout(()=> Actions.results(), 30000); 
  }
  
  render() {
    console.log(this.state.pic);
    if (!this.state.pic) return <Text>Loading...</Text>
    return (
      <StateContext.Consumer>
         {({ userDataArray }) => (
      <Card>
        <CardSection>
          <Image
            style={styles.imageStyle}
            source={{uri: this.state.pic}}
          />
        </CardSection>

        <CardSection>
          <Button onPress={() => {
            console.log('YES button pressed')
            // gets other users image from firebase and metadata
            firebase.storage().ref('elbuenodeChuck.jpg').getMetadata().then(metadata => {
              // create counter which is counter plus one
              let newCounter = metadata.counter++;
              // create newlikes which is likes plus one
              // create new metatdata object and store above
              const newMetadata = {
                counter: newCounter,
              }
            firebase.storage().ref('elbuenodeChuck.jpg').updateMetadata(newMetadata)
            .catch(error => 'We need to talk... something happended')
            })
            firebase.storage().ref('mr-t.png').getDownloadURL().then(url=> {
              this.setState({pic: url})
            })
            // firebase.storage().ref('hannibal.jpg').getDownloadURL().then(url=> this.setState({pic: url}))
            // firebase.storage().ref('Murdock.jpg').getDownloadURL().then(url=> this.setState({pic: url}))
            // firebase.storage().ref('phoenix.jpg').getDownloadURL().then(url=> this.setState({pic: url}))
          }}
          >
            YES
          </Button>
          <Button onPress={ () => {
            console.log(userData);
            // gets a new pic and sets state to vote on - should change ref to other user
            firebase.storage().ref('mr-t.png').getDownloadURL().then(url=> this.setState({pic: url}))
            // firebase.storage().ref('hannibal.jpg').getDownloadURL().then(url=> this.setState({pic: url}))
            // firebase.storage().ref('Murdock.jpg').getDownloadURL().then(url=> this.setState({pic: url}))
            // firebase.storage().ref('phoenix.jpg').getDownloadURL().then(url=> this.setState({pic: url}))
            }
          }>
            NO
          </Button>
        </CardSection>
      </Card>
      )}
      </StateContext.Consumer>
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
