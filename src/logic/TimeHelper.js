// =====================================================================================================================
// Date management
// =====================================================================================================================

/**
 * @return {Date} The date representing right now.
 */
export const now = () => new Date();

/**
 * @param  {Date} d The date object to copy.
 * @return {Date} The copied date object.
 */
export const copyDate = (d) => new Date(d.getTime());

// =====================================================================================================================
// Date Difference Management
// =====================================================================================================================

/**
 * @param  {number} days The number of days before the original date
 * @param  {Date} date The original date to get the before date for
 * @return {Date} The new date a number of days before the given date
 */
export const daysBefore = (days, date = now()) => {
  const newDate = new Date(date.getTime());
  newDate.setDate(date.getDate() - days);
  return newDate;
};

/**
 * @param  {number} weeks The number of weeks before the original date
 * @param  {Date} date The original date to get the before date for
 * @return {Date} The new date a number of weeks before the given date
 */
export const weeksBefore = (weeks, date = now()) => {
  const newDate = copyDate(date);
  newDate.setDate(date.getDate() - 7 * weeks);
  return newDate;
};

/**
 * @param  {number} months The number of months before the original date
 * @param  {Date} date The original date to get the before date for
 * @return {Date} The new date a number of months before the given date
 */
export const monthsBefore = (months, date = now()) => {
  const newDate = copyDate(date);
  newDate.setMonth(date.getMonth() - months);
  return newDate;
};

/**
 * @param  {number} years The number of years before the original date
 * @param  {Date} date The original date to get the before date for
 * @return {Date} The new date a number of years before the given date
 */
export const yearsBefore = (years, date = now()) => {
  const newDate = copyDate(date);
  newDate.setFullYear(date.getFullYear() - years);
  return newDate;
};

/**
 * @param  {Date} fromDate The from date to calculate the difference
 * @param  {Date} toDate The to date to calculate the difference
 * @return {number} The number of full days between the two dates
 */
export const daysBetween = (fromDate, toDate) => {
  const fromCopy = copyDate(fromDate);
  const toCopy = copyDate(toDate);
  fromCopy.setHours(0, 0, 0, 0);
  toCopy.setHours(0, 0, 0, 0);
  return Math.round(
    (toCopy.getTime() - fromCopy.getTime()) / (1000 * 60 * 60 * 24),
  );
};

// ISO String Management

/**
 * @param  {Date} d The date object to convert
 * @return {null|string} The ISO formatted string for the Date object.
 */
export const convertToISOString = (d) => d && d.toISOString();

/**
 * @param  {string} s The ISO formatted string to parse.
 * @return {Date} The Date object indicating the time.
 */
export const parseISOString = (s) => new Date(String(s));
