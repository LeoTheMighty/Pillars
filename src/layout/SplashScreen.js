import React, { useState, useEffect } from 'react';
import { Segment, Image, Header, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { updateUser } from '../redux/actions/userActions';
import Logo from '../img/pillars.png';

/**
 * The view for showing the loading splash screen of the app.
 *
 * @return {*} The jsx for displaying the component
 */
const loadingScreen = () => (
  <Grid verticalAlign="middle" centered textAlign="center">
    <Grid.Row>
      <Segment
        raised
        padded
        inverted
        style={{
          minWidth: 340,
          maxWidth: 800,
          marginBottom: '-60px',
          marginTop: '120px',
        }}
      >
        <Segment basic>
          <Image src={Logo} size="tiny" centered />
          <Header as="h2" inverted textAlign="center">
            {'Loading...'}
          </Header>
        </Segment>
      </Segment>
    </Grid.Row>
  </Grid>
);

/**
 * The controlled view for showing the app given if the add is loading.
 *
 * @param {[*]} children The children of the component to render if not loading
 * @param {Function} updateUserRedux The function in charge of updating the user from storage
 * @return {*} The jsx for displaying the component
 * @constructor
 */
const SplashScreen = ({ children, updateUserRedux }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    updateUserRedux(() => {
      setIsLoading(false);
    });
  });

  return isLoading ? loadingScreen() : children;
};

export default connect(
  () => ({}),
  {
    updateUserRedux: (successHandler) => updateUser(successHandler),
  },
)(SplashScreen);
