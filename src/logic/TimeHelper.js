// Date management

/**
 * @return {Date} The date representing right now.
 */
export const now = () => new Date();

/**
 * @param  {Date} d The date object to copy.
 * @return {Date} The copied date object.
 */
export const copyDate = (d) => new Date(d.getTime());

// Date Difference Management

export const daysBefore = (days, date) => {

};

export const weeksBefore = (weeks, date) => {

};

export const monthsBefore = (months, date) => {

};

export const yearsBefore = (years, date) => {

};



// ISO String Management

/**
 * @param  {Date} d The date object to convert
 * @return {null||string} The ISO formatted string for the Date object.
 */
export const convertToISOString = (d) => d && d.toISOString();

/**
 * @param  {string} s The ISO formatted string to parse.
 * @return {Date} The Date object indicating the time.
 */
export const parseISOString = (s) => new Date(String(s));
