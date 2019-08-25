import {now, daysBefore, weeksBefore, monthsBefore, yearsBefore, parseISOString} from './TimeHelper';
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
 * Gets the start date for the interval that the pillar is calculating for.
 *
 * @param {string} interval The name of the length of the specific interval to calculate for.
 * @param {number} duration The number of intervals before the start of the date.
 * @param {Date} now The date object indicating when to get the interval start for.
 */
const getIntervalStart = (interval, duration, now) => {
  switch (interval) {
    case "day":
      return daysBefore(duration, now);
    case "week":
      return weeksBefore(duration, now);
    case "month":
      return monthsBefore(duration, now);
    case "year":
      return yearsBefore(duration, now);
    default:
      throw new Error("Unrecognized interval string = " + interval);
  }
};

/**
 * Gets the current pillar value for the pillar as it will show up on the
 *
 * @param {Pillar} pillar The pillar to calculate the current value for.
 * @param {string} interval The name of the length of the specific interval to calculate for.
 * @param {number} duration The number of
 * @param {Date} 
 * @return {number} Returns a percentage from 0 - 100 about the current value of the pillar.
 */
export const getCurrentPillarValue = (pillar, interval, duration, nowDate = now()) => {
  const intervalStart = getIntervalStart(interval, duration, nowDate);
  let summedValues = 0;
  for (let i = 0; i < pillar.submissions.length; i++) {
    const submission = pillar.submissions[i];
    if (parseISOString(submission.time_submitted) > intervalStart) {
      // Add to the value
      summedValues += submission.value;
    } else {
      break;
    }
  }
  return summedValues /
};


const getMonthlyCurrentValue = (pillar) => {
  // TODO
};

