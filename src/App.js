import React from 'react';
import MainView from './layout/MainView';
import SplashScreen from './layout/SplashScreen';

const App = (props) => (
  <SplashScreen>
    <MainView />
  </SplashScreen>
);

export default App;
