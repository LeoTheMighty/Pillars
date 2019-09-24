import React from 'react';
import { connect } from 'react-redux';
import { Container, Menu } from 'semantic-ui-react';
import AllPillarsView from '../components/AllPillarsView';
import PillarsHeaderView from './PillarsHeaderView';
import type { FlowReducer } from '../redux/reducers/flowReducer';
import type { UserReducer } from '../redux/reducers/userReducer';
import {
  addSubmission,
  deletePillar,
  removeSubmission,
} from '../redux/actions/userActions';
import type PillarSubmission from '../types/PillarSubmission';

type Props = {
  user: UserReducer,
  flow: FlowReducer,
  addSubmissionRedux: (number, PillarSubmission) => void,
  removeSubmissionRedux: (number) => void,
  deletePillarRedux: (number) => void,
};

/**
 * The view for the main part of the app where you can view your pillars and edit them.
 *
 * @return {*} The jsx for the view
 * @constructor
 */
const MainView = ({
  user,
  flow,
  addSubmissionRedux,
  removeSubmissionRedux,
  deletePillarRedux,
}: Props) => {
  return (
    <div>
      <Menu
        fluid
        vertical
        widths={1}
        style={{
          height: '91vh',
          background: 'rgba(256, 256, 256, 0.3)',
          marginTop: '20px',
        }}
      >
        <Menu.Item>
          <PillarsHeaderView />
        </Menu.Item>
        <Menu.Item style={{ background: 'rgba(256, 256, 256, 0.5)' }}>
          <Container fluid>
            <AllPillarsView
              pillars={user.user.pillars}
              intervalView="week"
              submitting={flow.isChecking}
              addSubmissionRedux={addSubmissionRedux}
              removeSubmissionRedux={removeSubmissionRedux}
              deletePillarRedux={deletePillarRedux}
            />
          </Container>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default connect(
  (state) => ({
    user: state.user,
    flow: state.flow,
  }),
  (dispatch) => ({
    addSubmissionRedux: (index, submission) => {
      dispatch(addSubmission(index, submission));
    },
    removeSubmissionRedux: (index) => {
      dispatch(removeSubmission(index));
    },
    deletePillarRedux: (index) => {
      dispatch(deletePillar(index));
    },
  }),
)(MainView);
