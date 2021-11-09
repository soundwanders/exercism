export function totalBirdCount(birdsPerDay) {
  let totalBirds = 0
  for (let index = 0; index < birdsPerDay.length; index++) {
    totalBirds += birdsPerDay[index]
  }
  return totalBirds
}
/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let totalCount = 0
  for (let index = week * 7 - 7; index < week * 7; index++) {
    totalCount += birdsPerDay[index]
  }
  return totalCount;
}
/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let index = 0; index < birdsPerDay.length - 1; index += 2) {
    birdsPerDay[index] = birdsPerDay[index] + 1
  }
  return birdsPerDay;
}
