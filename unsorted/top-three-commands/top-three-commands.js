'use strict';

const test = ['cd 27', 'ls -a', 'ls -a', 'git commit', 'git commit', 'git commit', 'git commit', 'git add .', 'git add .', 'git add .', 'ls', 'npm run test', 'npm run test', 'npm i', 'npm i', 'npm i', 'npm i'];


const topThreeCommands = (stack) => {
  const tally = {};
  while(stack.length) {
    const popped = stack.pop();
    if (!popped.startsWith('cd') && !popped.startsWith('ls')) {
      if(!tally[popped]) {
        tally[popped] = 1;
      } else {
        tally[popped]++;
      }
    }
  }


  // duplicate values get included in top three items
  console.log(tally);
  return Object.keys(tally).sort((a, b) => tally[b] - tally[a])
  // return tally;
}

console.log(topThreeCommands(test));

