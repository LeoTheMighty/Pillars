import type Pillar from "../types/Pillar";

/**
 *
 */
export const serializePillar = () => {

};

/**
 *
 */
export const serializePillarSubmission = () => {

};

/**
 * Returns whether the pillar has been submitted today yet.
 *
 * @param {Pillar} pillar The pillar object to receive the information about.
 */
export const isSubmitted = (pillar) => {
  // TODO
};

/**
 *
 * @param pillar
 * @param interval
 * @param duration
 * @return {number} Returns a percentage from 0 - 100 about the current value of the pillar.
 */
export const getCurrentPillarValue = (pillar, interval, duration) => {
  switch (interval) {
    case "day":
      break;
    case "month":
      break;
    case "year":
      break;
    default:
      throw new Error("Unrecognized interval string = " + interval);
  }
};


const getMonthlyCurrentValue = (pillar) => {
  // TODO
};

