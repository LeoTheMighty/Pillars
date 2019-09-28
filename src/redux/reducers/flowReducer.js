import { SET_CHECKING, SET_INFO_MODAL_OPEN } from '../typeConstants';

/**
 *
 */
export type FlowReducer = {
  /** Whether the user is submitting submissions for the pillars. */
  isChecking: boolean,
  /** Whether the intro info modal is open or not. */
  infoModalOpen: boolean,
};

/**
 * The initial state for the flow reducer.
 *
 * @type {FlowReducer}
 */
const initialState: FlowReducer = {
  isChecking: false,
  infoModalOpen: false,
};

/**
 * Copies the state for the Flow Reducer.
 *
 * @param {FlowReducer} state The current state of the flow reducer.
 * @return {FlowReducer} The copied state.
 */
const copyState = (state) => {
  return { ...state };
};

/**
 * TODO
 * @param state
 * @param action
 * @returns {FlowReducer}
 */
export default (state: FlowReducer = initialState, action) => {
  switch (action.type) {
    case SET_CHECKING:
      state = copyState(state);
      state.isChecking = action.payload.isChecking;
      break;
    case SET_INFO_MODAL_OPEN:
      state = copyState(state);
      state.infoModalOpen = action.payload.infoModalOpen;
      break;
    default:
      break;
  }
  return state;
};