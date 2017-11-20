import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import HomeContainer from './containers/HomeContainer';

const RouterComponent = () => (
  <Router>
    <Stack key="root">
      <Scene 
        key="home" 
        component={HomeContainer} 
        title="Home" 
        />
    </Stack>
  </Router>
);

export default RouterComponent;