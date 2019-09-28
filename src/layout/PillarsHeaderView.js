import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Grid, Button, Container, Modal } from 'semantic-ui-react';
import PillarCreator from '../components/PillarCreator';
import type { FlowReducer } from '../redux/reducers/flowReducer';
import {setInfoModalOpen, setIsChecking} from '../redux/actions/flowActions';

type Props = {
  flow: FlowReducer,
  setIsCheckingRedux: (boolean) => void,
  setInfoModalOpenRedux: (boolean) => void,
};

/**
 * The view for the header of the pillars main view, which shows the actions to take.
 *
 * @returns {*} The jsx to display the component
 * @constructor
 */
const PillarsHeaderView = ({ flow, setIsCheckingRedux, setInfoModalOpenRedux }: Props) => {
  const [creatorIsOpen, setCreatorIsOpen] = useState(false);
  return (
    <Container fluid>
      <Grid columns="equal">
        <Grid.Column>
          <Button
            icon=""
            primary
            onClick={() => creatorIsOpen || setCreatorIsOpen(true)}
          >
            Create New Pillar
          </Button>
          <Modal
            closeIcon
            open={creatorIsOpen}
            onClose={() => setCreatorIsOpen(false)}
          >
            <PillarCreator closeView={() => setCreatorIsOpen(false)} />
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
    };
  },
)(PillarsHeaderView);
