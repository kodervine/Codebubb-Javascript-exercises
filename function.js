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

console.log(isPalindrome('smadram'))