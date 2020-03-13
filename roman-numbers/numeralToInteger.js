'use strict';

/**
 * Returns a number value from a roman numeral string.
 * @param {String} numeral Characters
 * @returns {Number} result numerals as an integer.
 */
function numeralToInteger(numeral) {
  
  // hash that converts char to integer value
  const _values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  let result = 0;

  for (let i = 0; i < numeral.length; i++) {

    let first = _values[numeral[i]];

    // Is there a roman numeral at i + 1, what is it?
    if (i + 1 < numeral.length) {
      let second = _values[numeral[i + 1]];

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

console.log(numeralToInteger('MMI'));
