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
import PillarDescriptionView from './PillarDescriptionView';
import { convertHexToHSL, convertHSLToCSSString, convertHSLToHex } from '../logic/ColorHelper';

type Props = {
  pillar: Pillar,
  intervalView: string,
  intervalSpan: number,
  submitting: boolean,
  addSubmissionRedux: (PillarSubmission) => void,
  removeSubmissionRedux: () => void,
  editPillarRedux: (Pillar) => void,
  deletePillarRedux: () => void,
};

/**
 * Handles the checking of the visual Pillar while in submitting mode.
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
 * Gets the color of the shine for the pillar.
 *
 * @param {string} color The color as it appears in the pillar.
 * @returns {string} The color of the shine for the pillar.
 */
const getShineColor = (color) => {
  const hsl = convertHexToHSL(color);
  return convertHSLToHex([hsl[0], hsl[1], Math.min(hsl[2] + 10, 100)]);
};

/**
 * The view that displays the specific pillar information for a single pillar
 *
 * @param {Pillar} pillar The pillar to show information for
 * @param {string} intervalView The type of interval
 * @param {boolean} submitting Whether the pillar is able to be checked right now.
 * @param {Function} addSubmissionRedux Redux function for
 * @return {*} The jsx for displaying the component
 * @constructor
 */
const PillarView = ({
  pillar,
  intervalView,
  intervalSpan,
  submitting,
  addSubmissionRedux,
  removeSubmissionRedux,
  editPillarRedux,
  deletePillarRedux,
}: Props) => {
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState(0);
  const [shineColor, setShineColor] = useState('white');
  const [confirmUndoModalOpen, setConfirmUndoModalOpen] = useState(false);

  useEffect(() => {
    setChecked(isSubmitted(pillar, now()));
    // setValue(getCurrentPillarValue(pillar, intervalView, intervalSpan));
    setValue(1);
    setShineColor(getShineColor(pillar.color));
  }, [pillar.submissions, intervalView, checked]);

  return (
    <div
      style={{
        height: `${(value + 0.01) * 75}vh`,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: pillar.color,
        background: `linear-gradient(to bottom right, ${shineColor}, ${pillar.color}, ${pillar.color}, ${shineColor}, ${pillar.color})`,
        position: 'relative',
      }}
      role="button"
      onClick={() =>
        !submitting && !detailModalOpen && setDetailModalOpen((p) => !p)
      }
    >
      <div
        style={{
          position: 'absolute',
          width: '100%',
          bottom: 2,
        }}
      >
        <Grid stretched rows="equal" textAlign="center" verticalAlign="bottom">
          <Grid.Row>{(value * 100).toFixed(0)}%</Grid.Row>
          <Grid.Row>{pillar.name}</Grid.Row>
          <Grid.Row>
            {submitting && (
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
      <Modal
        open={detailModalOpen}
        onClose={() => setDetailModalOpen(false)}
        closeIcon
        centered
      >
        <Modal.Header>{pillar.name}</Modal.Header>
        <Modal.Content>
          <PillarDescriptionView
            pillar={pillar}
            closeView={() => setDetailModalOpen(false)}
            editPillarRedux={editPillarRedux}
            deletePillarRedux={deletePillarRedux}
          />
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default PillarView;
