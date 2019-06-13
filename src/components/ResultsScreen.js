import React from 'react'
import { Text, Image } from 'react-native'
import {Card, CardSection} from './common'
import firebase from 'firebase'

const ResultsScreen = () => {
  return (
  <Card>
    <CardSection>
      <Image
        style={styles.imageStyle}
        source={ require('../config/elbuenodeChuck.jpg') }
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
