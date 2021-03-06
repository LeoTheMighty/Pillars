import React from 'react';
import { connect } from 'react-redux';
import { Container, Menu, Modal } from 'semantic-ui-react';
import AllPillarsView from '../components/AllPillarsView';
import PillarsHeaderView from './PillarsHeaderView';
import type { FlowReducer } from '../redux/reducers/flowReducer';
import type { UserReducer } from '../redux/reducers/userReducer';
import {
  addSubmission,
  deletePillar,
  editPillar,
  removeSubmission,
} from '../redux/actions/userActions';
import type PillarSubmission from '../types/PillarSubmission';
import {
  setAdminModalOpen,
  setInfoModalOpen,
} from '../redux/actions/flowActions';
import IntroView from './IntroView';
import AdminView from '../components/devTools/AdminView';

type Props = {
  // Redux State
  user: UserReducer,
  flow: FlowReducer,
  // User Redux Actions
  addSubmissionRedux: (number, PillarSubmission) => void,
  removeSubmissionRedux: (number) => void,
  editPillarRedux: (number, Pillar) => void,
  deletePillarRedux: (number) => void,
  // Flow Redux Actions
  setInfoModalOpenRedux: (boolean) => void,
  setAdminModalOpenRedux: (boolean) => void,
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
  editPillarRedux,
  deletePillarRedux,
  setInfoModalOpenRedux,
  setAdminModalOpenRedux,
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
              intervalView={flow.currentIntervalView}
              intervalSpan={flow.currentIntervalSpan}
              submitting={flow.isChecking}
              addSubmissionRedux={addSubmissionRedux}
              removeSubmissionRedux={removeSubmissionRedux}
              editPillarRedux={editPillarRedux}
              deletePillarRedux={deletePillarRedux}
            />
          </Container>
        </Menu.Item>
      </Menu>
      <Modal
        open={flow.infoModalOpen}
        onClose={() => setInfoModalOpenRedux(false)}
        closeIcon
      >
        <IntroView />
      </Modal>
      <Modal
        open={flow.adminModalOpen}
        onClose={() => setAdminModalOpenRedux(false)}
        closeIcon
      >
        <AdminView />
      </Modal>
    </div>
  );
};

export default connect(
  (state) => ({
    user: state.user,
    flow: state.flow,
  }),
  (dispatch) => ({
    // User Actions
    addSubmissionRedux: (index, submission) =>
      dispatch(addSubmission(index, submission)),
    removeSubmissionRedux: (index) => dispatch(removeSubmission(index)),
    editPillarRedux: (index, pillar) => dispatch(editPillar(index, pillar)),
    deletePillarRedux: (index) => dispatch(deletePillar(index)),
    // Flow Actions
    setInfoModalOpenRedux: (infoModalOpen) =>
      dispatch(setInfoModalOpen(infoModalOpen)),
    setAdminModalOpenRedux: (adminModalOpen) =>
      dispatch(setAdminModalOpen(adminModalOpen)),
  }),
)(MainView);
