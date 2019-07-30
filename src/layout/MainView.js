import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Container} from 'semantic-ui-react';
import AllPillarsView from '../components/AllPillarsView';

const MainView = (props) => {
  return (
    <div>
      <Menu>
      <Container fluid>
        <AllPillarsView pillars={props.user.user.pillars}/>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(MainView);