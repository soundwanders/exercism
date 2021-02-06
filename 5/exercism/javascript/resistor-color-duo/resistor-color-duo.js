//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export const decodedValue = ([colorOne , colorTwo]) => {
  let bandValue = `${resistorColors.indexOf(colorOne)}${resistorColors.indexOf(colorTwo)}`;
  return parseInt(bandValue);
};

// Can also find indexOf the two colors inside the resistorColors array, then convert into integer
  /*
    export const decodedValue = ([colorOne , colorTwo]) => {
      let bandValue = (resistorColors.indexOf(colorOne) * 10) + resistorColors.indexOf(colorTwo);
      return bandValue;
    };
  */
//

export const resistorColors = [
  'black' ,
  'brown' ,
  'red' ,
  'orange' ,
  'yellow' ,
  'green' ,
  'blue' ,
  'violet' ,
  'grey' ,
  'white'
];