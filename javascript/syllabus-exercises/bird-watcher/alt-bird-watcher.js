// alternate solution to bird-watcher

// global declaration for count;
let i = 0;
let count = 0;
/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let count = 0;
  for (i = 0; i < birdsPerDay.length; i++) {
    count += birdsPerDay[i] ;
  }
  return count;
}
/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let count = 0;
  let countWeeks = week * 7;
  for (i = countWeeks - 7; i < countWeeks; i++) {
    count += birdsPerDay[i] ;
  }
  return count;
}
/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (i = 0; i< birdsPerDay.length; i++) {
    let newBird = 0;
    if (i % 2 == 0) {
      newBird = birdsPerDay[i] + 1 ;
      birdsPerDay.splice(i, 1, newBird);
    }
  };
  return birdsPerDay;
}