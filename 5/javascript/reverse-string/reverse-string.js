//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (string) => {
  if (string === "") {
    return "";
  }
  else return reverseString(string.substr(1)) + string.charAt(0);
};

// OR you could use a decrementing for loop
/*
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
};
*/