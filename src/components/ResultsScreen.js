import React from 'react'
import { Text, Image } from 'react-native'
import {Card, CardSection} from './common'
import firebase from 'firebase';
import { StateContext } from '../containers/State';


// winning screen 
// winning pie chart


const ResultsScreen = () => {

  const {winningScreen} = useContext(StateContext);


  return (
  <Card>
    <CardSection>
      <Image
        style={styles.imageStyle}
        source={ require(winningScreen) }
      />
    </CardSection>
    <CardSection>
      <Image
        style={styles.chartStyle}
        source={ require('../config/pie_chart.jpg') }
      />
    </CardSection>
    <CardSection>
      <Text>25% of the voters are dead by now...</Text>
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
  chartStyle: {
    height: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}


export default ResultsScreen;
