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
 * Creates a new Pillar.
 *
 * @param {string} name The name of the pillar.
 * @param {string} color The color to display for the pillar.
 * @param {string|null} type The special type of the pillar to create.
 * @returns {Pillar} The newly created Pillar.
 */
export const newPillar = (name, color, type) => ({ name, color, type });

/**
 * Creates a new custom Pillar.
 *
 * @param {string} name The name of the pillar.
 * @param {string} color The color to display for the pillar.
 * @returns {Pillar} The newly created custom Pillar.
 */
export const newCustomPillar = (name, color) => newPillar(name, color, null);

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

