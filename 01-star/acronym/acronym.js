/* Solution by 401 JS graduate Brianna Burrows */

let testString = 'Machine Assisted Realization of the Virtual Electronic Library'

const wordsIgnore = ['a', 'for', 'an', 'and', 'of', 'or', 'the', 'to', 'with']

function acronyms(str){
  if(!str) return null
  let newArray = str.split(' ')
  let output = ''
  for (let word = 0; word < newArray.length; word++){
    if(!wordsIgnore.includes(newArray[word].toLowerCase())){
      output += newArray[word][0];
    }
  }
  return output
}

console.log(acronyms(testString))