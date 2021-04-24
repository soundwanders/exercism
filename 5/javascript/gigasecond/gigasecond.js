// return the future moment in time "d" by using Date constructor to identify the current moment in time "m"
// and calculate a new date with one gigasecond added.

export const gigasecond = (currentMoment) => {
  let oneGigasecond = 10 ** 12; // one gigasecond = 1 trillion milliseconds , or 1 billion seconds
  let futureMoment = new Date(currentMoment.getTime() + oneGigasecond);
  return futureMoment;
};