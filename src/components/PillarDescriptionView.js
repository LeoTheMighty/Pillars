import React from 'react';
import { Button, Header } from 'semantic-ui-react';
import type Pillar from '../types/Pillar';

type Props = {
  pillar: Pillar,
  closeView: () => void,
  deletePillarRedux: () => void,
};

/**
 * This view displays the actual details of the specified pillar. These details include both editable attributes and the
 * specific actions that one can take on the pillar.
 *
 * @param {Pillar} pillar The pillar to display the information with.
 * @param {Function} closeView Callback function to close the view with.
 * @param {Function} deletePillarRedux The redux function to delete this specific pillar.
 * @returns {*} The jsx to display the view.
 * @constructor
 */
const PillarDescriptionView = ({
  pillar,
  closeView,
  deletePillarRedux,
}: Props) => {
  return (
    <div>
      <Header>{pillar.name}</Header>
      <Button onClick={() => deletePillarRedux().then(() => closeView())}>
        Delete
      </Button>
    </div>
  );
};

export default PillarDescriptionView;
