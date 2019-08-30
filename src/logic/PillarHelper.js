import faker from 'faker';
import {
  now,
  daysBefore,
  weeksBefore,
  monthsBefore,
  yearsBefore,
  parseISOString,
  daysBetween,
  convertToISOString,
} from './TimeHelper';

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
 * @param {Pillar} pillar The pillar object to receive the information about
 * @param {Date} nowDate The date describing right now
 * @returns {boolean} Whether the pillar has been submitted already now
 */
export const isSubmitted = (pillar, nowDate = now()) => {
  if (pillar.submissions.length > 0) {
    const latestSubmission = pillar.submissions[0];
    return daysBetween(
      nowDate,
      parseISOString(latestSubmission.time_submitted),
    );
  }
  return false;
};

/**
 * Gets the start date for the interval that the pillar is calculating for.
 *
 * @param {string} interval The name of the length of the specific interval to calculate for
 * @param {number} duration The number of intervals before the start of the date
 * @param {Date} nowDate The date object indicating when to get the interval start for
 * @returns{Date} The date for the start of the interval for the pillar value
 */
const getIntervalStart = (interval, duration, nowDate) => {
  switch (interval) {
    case 'day':
      return daysBefore(duration, nowDate);
    case 'week':
      return weeksBefore(duration, nowDate);
    case 'month':
      return monthsBefore(duration, nowDate);
    case 'year':
      return yearsBefore(duration, nowDate);
    default:
      throw new Error(`Unrecognized interval string = ${interval}`);
  }
};

/**
 * Gets the current pillar value for the pillar as it will show up on the screen
 *
 * @param {Pillar} pillar The pillar to calculate the current value for.
 * @param {string} interval The name of the interval to calculate the value for
 * @param {number} duration The number of intervals to calculate the value for
 * @param  {Date} nowDate The date that determines the now date in the value
 * @return {number} Returns a percentage for the current value of the pillar
 */
export const getCurrentPillarValue = (
  pillar,
  interval,
  duration,
  nowDate = now(),
) => {
  const intervalStart = getIntervalStart(interval, duration, nowDate);
  let summedValues = 0;
  for (let i = 0; i < pillar.submissions.length; i += 1) {
    const submission = pillar.submissions[i];
    if (parseISOString(submission.time_submitted) > intervalStart) {
      // Add to the value
      summedValues += submission.value;
    } else {
      break;
    }
  }
  return summedValues / daysBetween(intervalStart, nowDate);
};

/**
 * TEST FUNCTION, creates a random pillars array.
 *
 * @param {number} numPillars The number of pillars in the array
 * @param {number} maxNumSubmissions The max number of submissions for each pillar
 * @return {[Pillar]} The random pillars
 * @private
 */
export const _randomPillars = (numPillars = 3, maxNumSubmissions = 10) => {
  const pillars = [];
  const potentialPillarNames = [
    'Exercise',
    'Diet',
    'Love',
    'Pillars',
    'Work',
    'Happiness',
  ];
  for (let i = 0; i < numPillars; i += 1) {
    const name =
      potentialPillarNames[
        Math.floor(Math.random() * potentialPillarNames.length)
      ];
    const color = faker.commerce.color();
    const pillar = {
      name,
      color,
      submissions: [],
    };
    const maxSubmissionInterval = 1;
    let numberOfDaysBefore = Math.floor(Math.random() * maxSubmissionInterval);
    for (
      let _ = 0;
      _ < faker.random.number(maxNumSubmissions - 1) + 1;
      _ += 1
    ) {
      // earliest to latest
      pillar.submissions.push({
        value: Math.random(),
        time_submitted: convertToISOString(daysBefore(numberOfDaysBefore)),
      });
      numberOfDaysBefore +=
        Math.floor(Math.random() * maxSubmissionInterval);
    }
    pillars.push(pillar);
  }
  return pillars;
};
