import React from 'react';
import { Grid, Button, Container, Modal } from 'semantic-ui-react';
import PillarCreator from '../components/PillarCreator';

/**
 * The view for the header of the pillars main view, which shows the actions to take.
 *
 * @returns {*} The jsx to display the component
 * @constructor
 */
const PillarsHeaderView = () => {
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
          <Button primary icon="check circle" />
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default PillarsHeaderView;
