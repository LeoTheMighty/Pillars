import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Button, Container, Modal, Menu} from 'semantic-ui-react';
import AllPillarsView from '../components/AllPillarsView';
import PillarCreator from "../components/PillarCreator";

const MainView = (props) => {
  return (
    <div>
      <Menu borderless inverted vertical fluid widths={1} fixed="top" style={{background: 'rgba(256, 256, 256, 0.5)'}}>
        <Menu.Item style={{background: 'rgba(256, 256, 256, 0.5)'}}>
          <Container fluid>
            <AllPillarsView pillars={[
              {name: "Exercise", value: 0.85, color: "green"},
              {name: "Diet", value: 0.65, color: "orange"},
              {name: "Love", value: 0.3, color: "red"},
            ]}/>
            {/*<AllPillarsView pillars={props.user.user.pillars}/>*/}
          </Container>
        </Menu.Item>
        <Menu.Item>
          <Container fluid>
            <Modal closeIcon trigger={<Button primary>Create New Pillar</Button>}>
              <PillarCreator/>
            </Modal>
          </Container>
        </Menu.Item>
      </Menu>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(MainView);