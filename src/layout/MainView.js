import React from 'react';
import { connect } from 'react-redux';
import { Container, Menu } from 'semantic-ui-react';
import AllPillarsView from '../components/AllPillarsView';
import PillarsHeaderView from './PillarsHeaderView';
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
        fluid
        vertical
        widths={1}
        style={{
          background: 'rgba(256, 256, 256, 0.5)',
          marginTop: '20px',
        }}
      >
        <Menu.Item>
          <PillarsHeaderView />
        </Menu.Item>
        <Menu.Item style={{ background: 'rgba(256, 256, 256, 0.5)' }}>
          <Container fluid>
            <AllPillarsView pillars={testPillars} intervalView="week" />
            {/* <AllPillarsView pillars={props.user.user.pillars}/> */}
          </Container>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default connect((state) => ({
  user: state.user,
}))(MainView);
