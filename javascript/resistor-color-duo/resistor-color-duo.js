
// find indexOf the two colors inside the resistorColors array
// then combine into one integer that equals resistor band value


export const decodedValue = ([colorOne , colorTwo]) => {
  let bandValue = (resistorColors.indexOf(colorOne) * 10) + resistorColors.indexOf(colorTwo);
  return bandValue;
};

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