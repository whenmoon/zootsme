import React from 'react';
import { Image, Text } from 'react-native';
import { useState, useContext, useEffect } from 'react';
import { StateContext } from '../containers/State';

function GalleryScreen() {

  const { userData } = useContext(StateContext);

  // console.log(userData)

  const pic = userData[0].imageUrl

  return (
    <>
      <Text>
        Gallery
    </Text>
      <Image
        style={styles.imageStyle}
        source={{ uri: pic }}
      />
    </>
  )
}

const styles = {
  imageStyle: {
    height: 400,
    width: null,
    flex: 1
  },
}

export default GalleryScreen;