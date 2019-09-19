import React from 'react';
import { connect } from 'react-redux';
import { Grid, Button, Container, Modal } from 'semantic-ui-react';
import PillarCreator from '../components/PillarCreator';
import type { FlowReducer } from '../redux/reducers/flowReducer';
import { setIsChecking } from '../redux/actions/flowActions';

type Props = {
  flow: FlowReducer,
  setIsCheckingRedux: Function,
};

/**
 * The view for the header of the pillars main view, which shows the actions to take.
 *
 * @returns {*} The jsx to display the component
 * @constructor
 */
const PillarsHeaderView = ({ flow, setIsCheckingRedux }: Props) => {
  return (
    <Container fluid>
      <Grid columns="equal">
        <Grid.Column>
          <Modal
            closeIcon
            trigger={
              <Button icon="money" primary>
                Create New Pillar
              </Button>
            }
          >
            <PillarCreator />
          </Modal>
        </Grid.Column>
        <Grid.Column>
          <Button
            primary={!flow.isChecking}
            icon="check circle"
            onClick={() => setIsCheckingRedux(!flow.isChecking)}
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
    };
  },
)(PillarsHeaderView);
