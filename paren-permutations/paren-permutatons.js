function allParens(num) {
  
  if ( num === 0 ) { return []; }
  if ( num === 1 ) { return ['()']; }

  parensList = allParens(num -1);

  let output = [];

  parensList.forEach(parens => {
    let back = parens + '()'; 
    let front = parens + '()'; 
    let self = '(' + parens + ')';

    !output.includes(back) && output.push(back);
    !output.includes(front) && output.push(front);
    !output.includes(self) && output.push(self);
  });
  
  return output;
}

console.log('DONE', allParens(3));
