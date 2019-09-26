import React, { useState } from 'react';
import { Button, Header, ModalActions, ModalContent } from 'semantic-ui-react';
import type Pillar from '../types/Pillar';
import { LOADING_TIME } from '../Constants';

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
  const [deleteIsLoading, setDeleteIsLoading] = useState(false);
  return (
    <div>
      <ModalContent>
        description goes here
      </ModalContent>
      <ModalActions>
        <Button
          loading={deleteIsLoading}
          onClick={() => {
            setDeleteIsLoading(true);
            setTimeout(() => {
              deletePillarRedux();
              closeView();
              setDeleteIsLoading(false);
            }, LOADING_TIME);
          }}
        >
          Delete
        </Button>
      </ModalActions>
    </div>
  );
};

export default PillarDescriptionView;
