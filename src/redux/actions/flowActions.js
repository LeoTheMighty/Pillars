import { SET_CHECKING, SET_INFO_MODAL_OPEN } from '../typeConstants';

/**
 * Redux action for setting the flow isChecking.
 *
 * @param {boolean} isChecking Whether the app will be checking for submissions.
 * @returns {{payload: {isChecking: *}, type: *}} The redux action information.
 */
export const setIsChecking = (isChecking) => ({
  type: SET_CHECKING,
  payload: {
    isChecking,
  },
});

/**
 * Redux action for setting the info modal open.
 *
 * @param {boolean} infoModalOpen Whether the info modal is open or not.
 * @returns {{payload: {infoModalOpen: *}, type: *}} The redux action information.
 */
export const setInfoModalOpen = (infoModalOpen) => ({
  type: SET_INFO_MODAL_OPEN,
  payload: {
    infoModalOpen,
  },
});
