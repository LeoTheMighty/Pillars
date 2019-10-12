import React, { useState } from 'react';
import {
  Button,
  Form,
  ModalActions,
  ModalContent,
  ModalHeader,
} from 'semantic-ui-react';
import type Pillar from '../types/Pillar';
import { LOADING_TIME } from '../Constants';
import { deepCopyPillar } from '../logic/PillarHelper';

type Props = {
  pillar: Pillar,
  closeView: () => void,
  editPillarRedux: (Pillar) => void,
  deletePillarRedux: () => void,
};

const generateField = (label, placeholder, value, setValue, editing) =>
  !editing ? (
    [
      <ModalHeader as="h5">{label}</ModalHeader>,
      <ModalHeader as="h2">{value}</ModalHeader>,
    ]
  ) : (
    <ModalHeader as="h4">
      <Form.Input
        fluid
        value={value}
        type="text"
        label={label}
        name={label}
        placeholder={placeholder}
        onChange={(v) => setValue(v.target.value)}
      />
    </ModalHeader>
  );

/**
 * This view displays the actual details of the specified pillar. These details include both editable attributes and the
 * specific actions that one can take on the pillar.
 *
 * @param {Pillar} pillar The pillar to display the information with.
 * @param {Function} closeView Callback function to close the view with.
 * @param {Function} editPillarRedux The redux function to edit this pillar.
 * @param {Function} deletePillarRedux The redux function to delete this specific pillar.
 * @returns {*} The jsx to display the view.
 * @constructor
 */
const PillarDescriptionView = ({
  pillar,
  closeView,
  editPillarRedux,
  deletePillarRedux,
}: Props) => {
  const [currentPillar, setCurrentPillar] = useState(deepCopyPillar(pillar));
  const [isEditing, setIsEditing] = useState(false);
  const [deleteIsLoading, setDeleteIsLoading] = useState(false);

  const setPillarValue = (n, v) =>
    setCurrentPillar((p) => {
      const c = deepCopyPillar(p);
      c[n] = v;
      return c;
    });

  return (
    <div>
      {generateField(
        'Name',
        'Name For The Pillar',
        currentPillar.name,
        (v) => setPillarValue('name', v),
        isEditing,
      )}
      {generateField(
        'Description',
        'Description For The Pillar',
        currentPillar.description,
        (v) => setPillarValue('description', v),
        isEditing,
      )}
      <Button
        primary={!isEditing}
        icon={isEditing ? 'save' : 'pencil'}
        onClick={() => {
          isEditing && editPillarRedux(currentPillar);
          setIsEditing((p) => !p);
        }}
      />
      <Button
        primary
        negative
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
    </div>
  );
};

export default PillarDescriptionView;
