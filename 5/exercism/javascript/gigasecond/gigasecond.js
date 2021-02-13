// return the future moment in time "d" by using Date constructor to identify the current moment in time "m"
// and calculate a new date with one gigasecond added.

export const gigasecond = (m) => {
  let d = new Date(Number(m) + 10 ** 12);
  return d;
};