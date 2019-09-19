import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Grid, Modal } from 'semantic-ui-react';
import type Pillar from '../types/Pillar';
import { now } from '../logic/TimeHelper';
import {
  getCurrentPillarValue,
  isSubmitted,
  newSubmission,
} from '../logic/PillarHelper';
import type PillarSubmission from '../types/PillarSubmission';

type Props = {
  pillar: Pillar,
  intervalView: string,
  editing: boolean,
  addSubmissionRedux: (PillarSubmission) => void,
  removeSubmissionRedux: () => void,
};

/**
 * 
 * @param checked
 * @param {Function} addSubmissionRedux
 * @param setChecked
 * @param setConfirmUndoModalOpen
 */
const handlePillarCheck = (checked, addSubmissionRedux, setChecked, setConfirmUndoModalOpen) => {
  if (!checked) {
    // Handle if there is an intense pillar
    addSubmissionRedux(newSubmission(1.0));
    setChecked(true);
  } else {
    // Then always make sure they know
    setConfirmUndoModalOpen(true);
  }
};

/**
 * 
 * @param removeSubmissionRedux
 * @param setChecked
 * @param setConfirmModalOpen
 */
const handlePillarUncheckConfirm = (
  removeSubmissionRedux,
  setChecked,
  setConfirmModalOpen,
) => {
  removeSubmissionRedux();
  setChecked(false);
  setConfirmModalOpen(false);
};

/**
 * The view that displays the specific pillar information for a single pillar
 *
 * @param {Pillar} pillar The pillar to show information for
 * @param {string} intervalView The type of interval
 * @param {boolean} editing Whether the pillar is able to be checked right now.
 * @return {*} The jsx for displaying the component
 * @constructor
 */
const PillarView = ({
  pillar,
  intervalView,
  editing,
  addSubmissionRedux,
  removeSubmissionRedux,
}: Props) => {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState(0);
  const [confirmUndoModalOpen, setConfirmUndoModalOpen] = useState(false);

  useEffect(() => {
    setChecked(isSubmitted(pillar, now()));
    setValue(getCurrentPillarValue(pillar, intervalView, 1));
  }, [pillar.submissions, intervalView, checked]);

  return (
    <div
      style={{
        height: `${value * 75}vh`,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: pillar.color,
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: '100%',
          bottom: 2,
        }}
      >
        <Grid stretched rows="equal" textAlign="center" verticalAlign="bottom">
          <Grid.Row>
            {value}
            {'\n'}
            {pillar.name}
          </Grid.Row>
          <Grid.Row>
            {editing && (
              <Checkbox
                toggle
                checked={checked}
                onChange={() =>
                  handlePillarCheck(
                    checked,
                    addSubmissionRedux,
                    setChecked,
                    setConfirmUndoModalOpen,
                  )
                }
              />
            )}
            <Modal
              open={confirmUndoModalOpen}
              onClose={() => setConfirmUndoModalOpen(false)}
              closeIcon
            >
              <Modal.Header>
                {'Are you sure you want to uncheck this pillar?'}
              </Modal.Header>
              <Modal.Actions>
                <Button
                  primary
                  onClick={() =>
                    handlePillarUncheckConfirm(
                      removeSubmissionRedux,
                      setChecked,
                      setConfirmUndoModalOpen,
                    )
                  }
                >
                  {'Uncheck'}
                </Button>
              </Modal.Actions>
            </Modal>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
};

export default PillarView;
