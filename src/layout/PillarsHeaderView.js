import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Grid, Button, Container, Modal } from 'semantic-ui-react';
import PillarCreator from '../components/PillarCreator';
import type { FlowReducer } from '../redux/reducers/flowReducer';
import {
  setAdminModalOpen,
  setInfoModalOpen,
  setIntervalView,
  setIntervalSpan,
  setIsChecking,
} from '../redux/actions/flowActions';
import { isDevelopment } from '../AppVariables';
import PillarIntervalViewEditor from '../components/PillarIntervalViewEditor';

type Props = {
  flow: FlowReducer,
  setIsCheckingRedux: (boolean) => void,
  setInfoModalOpenRedux: (boolean) => void,
  setAdminModalOpenRedux: (boolean) => void,
  setIntervalViewRedux: (string) => void,
  setIntervalSpanRedux: (number) => void,
};

/**
 * The view for the header of the pillars main view, which shows the actions to take.
 *
 * @returns {*} The jsx to display the component
 * @constructor
 */
const PillarsHeaderView = ({
  flow,
  setIsCheckingRedux,
  setInfoModalOpenRedux,
  setAdminModalOpenRedux,
  setIntervalViewRedux,
  setIntervalSpanRedux,
}: Props) => {
  const [creatorIsOpen, setCreatorIsOpen] = useState(false);
  const [intervalViewChangerIsOpen, setIntervalViewChangerIsOpen] = useState(
    false,
  );
  return (
    <Container fluid>
      <Grid columns="equal">
        <Grid.Column>
          <Button
            primary
            icon="eye"
            onClick={() =>
              intervalViewChangerIsOpen || setIntervalViewChangerIsOpen(true)
            }
          />
          <Modal
            open={intervalViewChangerIsOpen}
            onClose={() => setIntervalViewChangerIsOpen(false)}
            closeIcon
          >
            <Modal.Header>Choose the Pillar View</Modal.Header>
            <Modal.Content>
              <PillarIntervalViewEditor
                flow={flow}
                setIntervalViewRedux={setIntervalViewRedux}
                setIntervalSpanRedux={setIntervalSpanRedux}
              />
            </Modal.Content>
          </Modal>
        </Grid.Column>
        <Grid.Column>
          <Button
            icon="plus"
            primary
            onClick={() => creatorIsOpen || setCreatorIsOpen(true)}
          />
          <Modal
            closeIcon
            open={creatorIsOpen}
            onClose={() => setCreatorIsOpen(false)}
          >
            <Modal.Header>Pillar Creator</Modal.Header>
            <Modal.Content>
              <PillarCreator closeView={() => setCreatorIsOpen(false)} />
            </Modal.Content>
          </Modal>
        </Grid.Column>
        <Grid.Column>
          <Button
            primary={!flow.isChecking}
            icon="check circle"
            onClick={() => setIsCheckingRedux(!flow.isChecking)}
          />
        </Grid.Column>
        <Grid.Column>
          <Button
            primary
            icon="info circle"
            onClick={() => setInfoModalOpenRedux(true)}
          />
        </Grid.Column>
        {isDevelopment && (
          <Grid.Column>
            <Button
              primary
              icon="adn"
              onClick={() => setAdminModalOpenRedux(true)}
            />
          </Grid.Column>
        )}
      </Grid>
    </Container>
  );
};

export default connect(
  (state) => ({
    flow: state.flow,
  }),
  (dispatch) => {
    return {
      setIsCheckingRedux: (isChecking) => {
        dispatch(setIsChecking(isChecking));
      },
      setInfoModalOpenRedux: (infoModalOpen) =>
        dispatch(setInfoModalOpen(infoModalOpen)),
      setAdminModalOpenRedux: (adminModalOpen) =>
        dispatch(setAdminModalOpen(adminModalOpen)),
      setIntervalSpanRedux: (intervalSpan) =>
        dispatch(setIntervalSpan(intervalSpan)),
      setIntervalViewRedux: (intervalView) =>
        dispatch(setIntervalView(intervalView)),
    };
  },
)(PillarsHeaderView);
