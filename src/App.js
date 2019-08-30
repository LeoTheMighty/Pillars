import React from 'react';
import MainView from './layout/MainView';
import SplashScreen from './layout/SplashScreen';

/**
 * The view for the entire app.
 *
 * @returns {*} The jsx to display the component
 * @constructor
 */
const App = () => (
  <SplashScreen>
    <MainView />
  </SplashScreen>
);

export default App;
