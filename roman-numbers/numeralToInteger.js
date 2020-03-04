'use strict';

/**
 * Returns a number value from a roman numeral string.
 * @param {String} numeral Characters
 * @returns {Number} result numerals as an integer.
 */
function numeralToInteger(numeral) {

  let result = 0;

  for (let i = 0; i < numeral.length; i++) {

    let first = value(numeral[i]);

    // Is there a roman numeral at i + 1, what is it?
    if (i + 1 < numeral.length) {
      let second = value(numeral[i + 1]);

      // if the first numeral char value is greater the the preceding, just add it to the result
      if (first >= second) {
        result = result + first;
      } else { // if preceding numeral is larger, than add the difference between the first and second.
        result = result + second - first;
        i++;  // accounting for next index i + 1
      }
    } else {
      result = result + first;
    }
  }
  return result;
}

function value(char) {

  // switch statement that converts numeral characters to numbers values
  switch (char) {
    case 'I':
      return 1;
    case 'V':
      return 5;
    case 'X':
      return 10;
    case 'L':
      return 50;
    case 'C':
      return 100;
    case 'D':
      return 500;
    case 'M':
      return 1000;
    default:
      return 0;
  }
}

console.log(numeralToInteger('MMI'));
