import React from 'react';
import { connect } from 'react-redux';
import { Button, Container, Modal, Menu } from 'semantic-ui-react';
import AllPillarsView from '../components/AllPillarsView';
import PillarCreator from '../components/PillarCreator';
import { _randomPillars } from '../logic/PillarHelper';

const testPillars = _randomPillars();

/**
 * The view for the main part of the app where you can view your pillars and edit them.
 *
 * @return {*} The jsx for the view
 * @constructor
 */
const MainView = () => {
  return (
    <div>
      <Menu
        borderless
        inverted
        vertical
        fluid
        widths={1}
        fixed="top"
        style={{ background: 'rgba(256, 256, 256, 0.5)' }}
      >
        <Menu.Item style={{ background: 'rgba(256, 256, 256, 0.5)' }}>
          <Container fluid>
            <AllPillarsView pillars={testPillars} intervalView="week" />
            {/* <AllPillarsView pillars={props.user.user.pillars}/> */}
          </Container>
        </Menu.Item>
        <Menu.Item>
          <Container fluid>
            <Modal
              closeIcon
              trigger={<Button primary>Create New Pillar</Button>}
            >
              <PillarCreator />
            </Modal>
          </Container>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default connect((state) => ({
  user: state.user,
}))(MainView);
