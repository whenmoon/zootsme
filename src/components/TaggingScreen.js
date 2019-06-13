import React, { Component } from 'react'
import { View, Text } from 'react-native';
import { Card, CardSection, InputField } from './common';


//implies redux secondary feature
//component level??
class TaggingScreen extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Text>Selfie here</Text>
        </CardSection>
        <CardSection>
          <InputField
            label="Keywords
            "
            placeholder="#your_tag_here"
          />
          <Text>Label input here</Text>
        </CardSection>
      </Card>
    )
  }
}

export default TaggingScreen;