import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Card, CardSection, Button} from './common';
import axios from 'axios';
import firebase from 'firebase'
import { Actions } from 'react-native-router-flux';
import { useState, useContext, useEffect} from 'react'
import { StateContext } from '../containers/State';

function VotingScreen () {
  
  const [pic, setPic] =useState('');
  const [picNo, setPicNo]= useState(0);
  const {userData} = useContext(StateContext);



  const getNextPic = (index) => {
    console.log(userData)
    if (userData[index]) {
    firebase.storage().ref(userData[index].imageUrl).getDownloadURL().then(url=> this.setPic({url}))
    } else {
      //Actions.results()
    }
  }

  useEffect(()=> {
      getNextPic(0)
    },[]);
  
    console.log(pic);
    if (pic ==='') return <Text>Loading...</Text>
    return (
      <Card>
        <CardSection>
          <Image
            style={styles.imageStyle}
            source={{uri: pic}}
          />
        </CardSection>

        <CardSection>
          <Button onPress={() => {
            console.log('YES button pressed')
              // create counter which is counter plus one
              setPicNo(picNo => picNo++)
              getNextPic(picNo++)
          }}
          >
            YES
          </Button>
          <Button onPress={ () => {
            setPicNo(picNo => picNo++)
              getNextPic(picNo++)
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
