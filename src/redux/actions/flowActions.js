import { SET_CHECKING } from '../typeConstants';

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
