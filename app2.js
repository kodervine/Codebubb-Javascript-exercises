/*
Part 5
=====================
Question 1
Write a javascript function that returns a passed string with letters in alphabetical order

--------------------
Pseudo code
-- Create a function that accepts one parameter
-- Return the str to sorted

=====================
*/

const sortStr = (str) => {
  return str.split('').sort().join('')
}

console.log(sortStr('balenciaga'))
console.log(sortStr('drag'))

//His solution

const alphaOrder = (str) => 
  str.split('').sort((a,b) => a > b ? 1 : -1).join('')


  console.log(alphaOrder('dabby'))

/*
Part 5
=====================
Question 2
Write a javascript function that accepts a string as a parameter and counts the number of vowels within the string

--------------------
Pseudo code
-- Create a function that accepts one parameter
-- Check to see if the string matches with any of the 5 vowels
-- Count the strings

=====================
*/

const countStr = (str) => {
  return str.match(/[aeiou]/g).length
}

console.log(countStr('Fatherlord'))

//His solution
const countLetters = (
  str, letters = ['a', 'e', 'i', 'o', 'u']) => str
    .split('')
    .filter(s => letters.indexOf(s) > -1)
    .length

console.log(countLetters('Babaginda'))

/*
Part 5
=====================
Question 2
Write a javascript function to convert an amount to coins

--------------------
Pseudo code

=====================
*/

/*
Part 5
=====================
Question 4
Write a javascript function to extract unique characters from a string

--------------------
Pseudo code
-- Use regular expression to do that

=====================
*/

const uniqueChar = (str) => {
  return str.replace(/[^a-zA-Z ]/g, "")
}

console.log(uniqueChar('Chin2534&4$'))


/*
Part 5
=====================
Question 5
Write a javascript function to find the first not repeated character

--------------------
Pseudo code
-- Convert to an array
-- Loop over an array/map over an array
-- Check if the number is > 1
-- If not return the interger

=====================
*/
//His solution
const repeatChar = (str)  =>
  str.split('')
    .filter((item, index, arr) => 
      arr.filter(arrItem => arrItem === item).length === 1)


console.log(repeatChar('nnaamme'))