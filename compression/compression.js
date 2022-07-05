'use strict';

function stringCompression(input = '') {
  let output = '';
  let counter = 1;
  let previous  = '';

  
  for (let char of input) {
    
    if (previous) {
      if (char === previous) {
        counter+=1;
      } else { 
        output += `${previous}${counter}`;
        counter = 1;
      }
    }
    previous = char;
  }
  output += `${previous}${counter}`;


  return output.length < input.length ? output : input;
}


(function test() {

  let string = 'aabcccccaaa';
  let output = stringCompression(string);
  console.log(output);
  if (output === 'a2b1c5a3') {
    console.log('SUCCESS');
  } else {
    console.log('FAILURE');
  }


  string = 'abbbccccccddd';
  output = stringCompression(string);
  console.log(output);
  if(output === 'a1b3c6d3') {
    console.log('SUCCESS');
  } else {
    console.log('FAILURE');

  }
})();
