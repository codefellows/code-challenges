const biggest_sum = (numbers) => {
  // Simple edge case
  if ( numbers.length < 2 ) { return numbers; }

  // Starting point is zero and between elements 0 and 0 (i.e. the first element)
  let max_sum = numbers[0];
  let max_start = 0;
  let max_end = 0;


  numbers.forEach( (num,idx) => {

    // New sum set for each starting point (idx) looking ahead
    let current_sum = 0;

    // Start where we are (idx) and look ahead
    for( let j = idx; j<= numbers.length; j++ ) { 
      current_sum += numbers[j]; // Increment the sum

      if ( current_sum > max_sum ) { 
        max_sum = current_sum;  // update the best sum so far if we've beaten it
        max_start = idx;        // The slice will now start at the outer index (idx)
        max_end = j;            // The slice will end here (j)
      }
    }

  });

  return numbers.slice(max_start, max_end+1);

}


const nums = [-68, -76, 55, -60, 82, -12, -95, 72, 87, 63, -53, -93, 68, -10, -4, 86, 18, -40, 19, -34]

console.log( biggest_sum(nums) );

// [72, 87, 63, -53, -93, 68, -10, -4, 86, 18]
