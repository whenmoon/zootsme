import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import VotingScreen from './components/VotingScreen';
import TaggingScreen from './components/TaggingScreen';
import ResultsScreen from './components/ResultsScreen';
import Selfie from './components/Selfie'

const RouterComponent = () => {

  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth" >
          <Scene key="login"  initial component={LoginForm} title="Please Login" />
        </Scene>
        {/* bear in mind Actions brings to main and then to children
            add right and right title to hastags at selfie??
            or maybe take a pick on clicking it and driving to tagging
            consider gorouping selfie w labeling then standalone voting
            and finally results linking back to tagging */}
        <Scene key="main" >
          <Scene key="selfie"  component={Selfie} title="Take a selfie..." />
          <Scene key="voting"  component={VotingScreen} title="Voting..." />
          <Scene key="tagging" component={TaggingScreen} title="Tag your selfie..."/>
          <Scene key="results" component={ResultsScreen} title="Your results" />
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent;