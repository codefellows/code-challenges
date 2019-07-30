  const assert = require('assert');

  // Made this global to keep it DRY, since both methods care about this data
  // Maps are iterable in insertion order in JS.
  let romanNumerals = new Map(); 
      romanNumerals.set('M', 1000);
      romanNumerals.set('CM', 900);
      romanNumerals.set('D', 500);
      romanNumerals.set('CD', 400);
      romanNumerals.set('C', 100);
      romanNumerals.set('XC', 90);
      romanNumerals.set('L', 50);
      romanNumerals.set('XL', 40);
      romanNumerals.set('X', 10);
      romanNumerals.set('IX', 9);
      romanNumerals.set('V', 5);
      romanNumerals.set('IV', 4);
      romanNumerals.set('I', 1);


// Number to Roman Numeral
function toRoman(num) {  
  let result = '';
  romanNumerals.forEach( (integer, numeral) => { 
    while (num % integer < num) {     
      result += numeral;
      num -= integer;
    }
  });
  return result;
}

// Iterates the string backwards, building up the return number
// Will add/subtract as it goes, while looking at the last one.
function fromRoman(romanNumeral) {

  let result = 0;
  let previousValue = 0;

  for (let i = romanNumeral.length - 1; i >= 0; --i) {

    let currentChar = romanNumeral.charAt(i);
    let currentValue = romanNumerals.get(currentChar);

    if ( currentValue < previousValue ) { result -= currentValue; }
    else { result += currentValue; }

    previousValue = currentValue;
  }

  return result;
}


// Some Proofs

let tests = {
  'XXVI': 26,
  'CI': 101,
  'IX': 9,
  'XIX': 19,
  'MCMXLVII':1947,
  'CMXCIX': 999,
};

// This should produce no output (assert only logs out when the assertion fails)
Object.keys(tests).forEach( (numeral) => { 

  // To Number
  console.assert( fromRoman(numeral) === tests[numeral], `${numeral} conversion failed ... expected: ${tests[numeral]}, received: ${fromRoman(numeral)}`);

  // To Roman
  console.assert( toRoman(tests[numeral]) === numeral, `${tests[numeral]} conversion failed ... expected: ${numeral}, received: ${toRoman(tests[numeral])}`);

})
