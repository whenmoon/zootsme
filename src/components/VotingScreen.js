import React from 'react';
import { Text, Image } from 'react-native';
import { Card, CardSection, Button } from './common';
import { Actions } from 'react-native-router-flux';
import { useState, useContext, useEffect } from 'react';
import { StateContext } from '../containers/State';

function VotingScreen() {

  const [pic, setPic] = useState('');
  const [picNo, setPicNo] = useState(0);
  const { userData } = useContext(StateContext);

  const getNextPic = (index) => {
    if (userData[index]) {
      setPic(userData[index].imageUrl)
    } else {
      // post userData changes
      Actions.results()
    }
  }

  useEffect(() => {
    getNextPic(0)
  }, []);

  console.log(pic);
  if (pic === '') return <Text>Loading...</Text>
  return (
    <Card>
      <CardSection>
        <Image
          style={styles.imageStyle}
          source={{ uri: pic }}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => {
          console.log('YES button pressed')
          console.log(picNo)
          // create counter which is counter plus one
          setPicNo(prevPicNo => prevPicNo + 1)
          getNextPic(picNo)
        }}
        >
          YES
          </Button>
        <Button onPress={() => {
          setPicNo(prevPicNo => prevPicNo + 1)
          getNextPic(picNo)
        }
          // change counter on database -1 
        }>
          NO
          </Button>
      </CardSection>
    </Card>
  )
}

const styles = {
  imageStyle: {
    height: 400,
    width: null,
    flex: 1
  },
}
export default VotingScreen;
