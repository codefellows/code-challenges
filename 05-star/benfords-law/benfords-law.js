'use strict';

// optimal solution with one iteration

const data1 = [
  10000000,
  100000000000,
  2000,
  10001010101,
  90000000000,
]

const data2 = [
  10000000,
  100000000000,
  2000,
  10001010101,
  80,
  8000,
  800000,
  80000000,
  8000000000,
  800000000000,
  90000000000,
]

const areOnesHightest = (arr) => {

  let maxFrequencyValue = 0;
  let maxFrequencyIndex;

  // helper function to recurse a bigger value down to its leading digit mathematically
  const getSingleDigit = (num) => {
    if (num < 10) return Math.round(num);
    return getSingleDigit(num / 10);
  }
  
  // instantiate an array with 10 slots to act as hashmap (as we would only ever get stripped off digits of 1-9 from this problem)
  const table = new Array(10).fill(0);

  for (let i = 0; i < arr.length; i++) {
    const value = getSingleDigit(arr[i]);
    console.log(value);
    table[value]++;
    if (table[value] > maxFrequencyValue) {
      maxFrequencyValue = table[value];
      maxFrequencyIndex = value;
    }
  }
  
  console.log(table);
  return maxFrequencyIndex === 1;
  
}

console.log(areOnesHightest(data1));
console.log(areOnesHightest(data2));