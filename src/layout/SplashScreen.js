import React, {useState, useEffect} from "react";
import {Segment, Image, Header, Grid} from "semantic-ui-react";
import {connect} from "react-redux";
import {updateUser} from "../redux/actions/userActions";
import Logo from '../img/pillars.png';

const loadingScreen = () => (
  <Grid verticalAlign="middle" centered textAlign='center'>
    <Grid.Row>
      <Segment raised padded inverted style={{minWidth: 340, maxWidth: 800, marginBottom: '-60px', marginTop: '120px'}}>
        <Segment basic>
          <Image src={Logo} size="tiny" centered/>
          <Header as='h2' inverted textAlign='center'>
            Loading...
          </Header>
        </Segment>
      </Segment>
    </Grid.Row>
  </Grid>
);

const SplashScreen = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    props.updateUser(() => {
      setIsLoading(false);
    });
  });

  return isLoading ? loadingScreen() : props.children
};

const mapStateToProps = state => ({
  flow: state.flow
});

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (successHandler) => {
      dispatch(updateUser(successHandler));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
