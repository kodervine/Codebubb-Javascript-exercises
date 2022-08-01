// Exercise 1
// Write a JavaScript function that reverse a number
let numToReverse = [];
function reverseNum(num) {
  const strNum = num.toString().split('');
  for (let int of strNum){
    numToReverse.unshift(int)
  }
  return parseInt(numToReverse.join(''));
}

console.log(reverseNum(12345678))

// Exercise 2
// Write a JavaScript function that checks whether a passed string is palindrome or not?
function isPalindrome(str){
  const splitPalindrome = str.split('');
  const splitPalindrome2 = splitPalindrome.reverse()
  const paliToStr = splitPalindrome.join('')
  const paliToStr2 = splitPalindrome2.join('')
  console.log(paliToStr2)
  if (paliToStr == paliToStr2){
    return true
  } else {
    return `This ${str} is not palindrome`
  }
}

console.log(isPalindrome('madram'))

// Exercise 3
// //Write a JavaScript function that generates all combinations of a string.
function allStrCombinations(str){
  let array1 = [];
    for (let x = 0, y = 1; x<str.length; x++, y++){
      array1[x] = str.substring(x,y)
    }
  let combi = [];
  let temp = ' ';
  let slent = Math.pow(2, array1.length);

  for (let i = 0; i < slent; i++){
    temp = " ";
    for (let j = 0; j < array1.length; j++){
      if((i & Math.pow(2,i))){
        temp += array1[j];
      }
    }
    if (temp !== ''){
      combi.push(temp)
    }
  }
  // console.log(combi.join('\n'))
}

console.log(allStrCombinations('fallon'))

// Exercise 4
// Write a JavaScript function that returns a passed string with letters in alphabetical order. 

function alpaStr(str){
  console.log(str.split('').sort().join(' '))
}

alpaStr('wfre')

// Exercise 5
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
function toInitUpperCase(arr){
  let words = arr.split(' ').map(word => {
    console.log(word.charAt(0).toUpperCase() + word.slice(1))
  })
  return words.join(' ')
}

console.log(toInitUpperCase('the quick brown fox'))

// Exercise 6
// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string

function longestStr(arr){
  let longerStr = '';
  let newStr = arr.split(' ')
  console.log(newStr)

    for(let str of newStr){
      if (str.length > longerStr.length){
        return longerStr = str;
      }
    }
  return longerStr;
}

console.log(longestStr('Web Development Tutorial'))