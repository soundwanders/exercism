// each 'step' is a calculation of the next number in the conjecture,
// where the parameter (n) is the new number being calculated
export const steps = (n) => {
  if (n < 1) {
    throw new Error("Only positive numbers are allowed");
  }
  if (n === 1) {
    return 0;
  }
  // If number 'n' is even, divide n by 2 to get n / 2
  // If number 'n' isodd, multiply n by 3 and add 1 to get 3n + 1
  if (n % 2 === 0) {
    return steps(n / 2) + 1;
  }
  else return steps(n * 3 + 1) + 1;
};