// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */

export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
    return 0.5;

    case 'Energizer':
    return 1.5;
    
    case 'Green Garden':
    return 1.5;

    case 'Tropical Island':
    return 3;

    case 'All or Nothing':
    return 5;

    default:
    return 2.5;
  }
}


/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  // create object 'wedges' with size properties
  const wedges = {
    'small': 6,
    'medium': 8,
    'large': 10
  }
  let slicedWedges = 0;
  let i = 0;
  while (slicedWedges < wedgesNeeded) {
    if (limes[i]) { 
      slicedWedges += wedges[limes[i]]; 
      i++;
    }
    else return i;
  }
  return i;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let time = 0
  while (time < timeLeft) {
    let drink = orders.shift()

    switch (drink) {
      case 'Pure Strawberry Joy':
        time += 0.5;
        break;
      case 'Energizer':
        time += 1.5;
        break;
      case 'Green Garden':
        time += 1.5;
        break;
      case 'Tropical Island':
        time += 3;
        break;
      case 'All or Nothing':
        time += 5;
        break;
      default:
        time += 2.5; 
    }
  }
  return orders;
}
