/* Part 1 - Exercise 1

A program to check two numbers
Retur true if one of the numbers is 100
Or if the sum of the two numbers is 100 */


// let numOne = Math.floor(Math.random() * 100 + 1);
// let numTwo = Math.floor(Math.random() * 100 + 1);

// if ((numOne + numTwo == 100) || numOne == 100 || numTwo == 100) {
//   console.log(true)
//   console.log(numOne, numTwo)
// } else {
//   console.log(numOne, numTwo)
// }


// Tried on me own after I realized I didn't create the solution above
function isEqualto100(a, b) {
  if (a === 100 || b === 100 || (a + b === 100)) {
    return true;
  } else {
    return false
  }
}

isEqualto100(20, 40)

/*Exercise 2 - Part 1 
==============================
Write a program to get the extension of a file name 

============================ 
His solution */

const fileName = (str) => str.slice(str.lastIndexOf('.'))

console.log(fileName('index.html'));


/*
======================
Exercise 4 - Part 1 

==============================
Write a programme to return today's date

======================

My solution */
const todayDate = new Date

const todayDay = todayDate.getDate()
const thisMonth = todayDate.getMonth()
const thisYear = todayDate.getFullYear()
console.log(`${todayDay}/${thisMonth}/${thisYear}`)

// The lesson's solution
const formatDate = (date = new Date()) => {
  const days = date.getDay();
  const month = date.getMonth();
  const years = date.getFullYear();
  return `${todayDay}/${thisMonth}/${thisYear}`
}
console.log(formatDate())



/* Exercise 5 - Part 

=================================

  Create a new string adding "New" in front of a given strings with "New!" already then return the original string

==================================
*/

//My solution
const strCreation = function addNew(str) {
  if (str[0] !== 'n' && str[1] !== 'e' && str == 'w') {
    return `new! ${str}`;
  } else {
    str.slice(2);
  }
}
console.log(strCreation("pen"))

//The solution
//====================

const addNewStr = (str) => str.indexOf('New') === 0 ? str : `New! ${str}`;

console.log(addNewStr('New offers'))

/* 
====================
Exercises part 2
Question 1
Write a jaavscript program to create new string from a given string taking the first 3 characters and the last three characters and adding them together. The string length must be 3 or more, if not, the original string is returned

===================
My Pseudo code - 
** Create a new string from a given string
** Taking the first 3 characters and the last 3 characters
** Add them together
** The string length must be 3 or more,
** else, return the original string

*/

// const originalStr = 'familyman'

function newStr(originalStr) {
  if (originalStr < 3) {
    return originalStr
  }
  const newStr2 = originalStr.slice(0, 3)
  const newStr3 = originalStr.slice(-3)
  newStr = newStr2 + newStr3
  console.log(newStr);
}

newStr('Chinenye')

/*  
Part 2 - Exercise 2

===================
Question 

------------------
Write a javascript program to extract the first half of a string of even length

===================

Pseudocode
Check string
If % === 0
Return length divided by 2

Else 
Return ceil of the half
*/

function evenlength(str) {
  const half = str.length / 2
  if (str.length % 2 === 0) {
    return str.slice(0, half)
  } else {
    return str
  }
}

// evenlength('beautiful')
console.log(evenlength('Chiduziem'))

/* 
====================
Exercises part 2
Question 3
Write a javascript program to concatenate two strings except their first character

===================
My Pseudo code - 
** Create a function that accepts two parameters
** Add the two strings together
** Remove the first index of each string
*/

const concatenateStr = function (firstStr, secondStr) {
  return firstStr.substr(1) + secondStr.substr(1);
}
concatenateStr('Java', 'Script')
console.log(concatenateStr('Java', 'Script'))


/* 
====================
Exercises part 2
Question 4
Given two values, write a javascript program to find out which one is nearest to 100
===================
My Pseudo code - 
** Create a function that accepts two parameters
** Check both parameters
** If one is closer to 100
** Return that one

*/

const isCloseto100 = function (x, y) {
  if (x - 10 === 100 || x + 10 === 100) {
    return x
  } else if (y - 10 === 100 || y + 10 === 100) {
    return y
  } else {
    return 'None is close to 100'
  }
}

isCloseto100(90, 10)

/*
================
The lesson's solutions
*/

const closestTo100 = (a, b) => {
  if ((100 - a) < (100 - b)) {
    return a
  } else {
    return b
  }
}

closestTo100(80, 70)

/* 
====================
Exercises part 2
Question 5
Write a javascript program to check a given string contains 4 occurences of a specified character

===================
My Pseudo code - 
** Create a function that accepts two parameters
** Check if the string contains 2 - occurences of a specified character
*/

function strContains(str, occur) {
  if (str.includes(occur)) {
      return 'It worked'
  } else {
    return 'Nah, it didn\'t work';
  }
}
strContains('freeeshe', 'e');
console.log(strContains('freeeshe', 'e'))

// The other solution

const countChars = (str, char) => {
  str.split('').filter(ch => ch === char).length;
}

const contains2To4 = (str, char) => 
  countChars(str, char) >= 2 && countChars(str, char) <= 4;

console.log(contains2To4('ooh', 'o'))

/* 
====================
Exercises part 3
Question 1
Write a javascript program to find the number of even digits in an array of intergers

===================
My Pseudo code - 
** Create a function that accepts an array
** Check if the array contains even numbers
*/

function evenArrays(arr) {
  arr.filter(function(num) {
    return num % 2 === 0
  })
}

console.log(evenArrays([1,2,3,4,5,6,7,]))

const evenArray = (arr) =>
  arr.filter(num => num % 2 === 0).length

console.log(evenArray([1,2,3,4,5,6,7,]))

//Solution

const countEvenNums = (arr) => 
  arr.filter(num => num % 2 === 0).length;

console.log(countEvenNums([1,2,3,4,5,6]))

/* 
====================
Exercises part 3
Question 2
Write a javascript program to find the number of even values up to a given number

===================
My Pseudo code - 
** Create a function that accepts two parameter (Array and number count)
** Filter the even numbers to a new variable
** Check if the number of array is same as a given number
*/

function findEvenNum(arr, count){
  const filteredNums = arr.filter(nums => nums % 2 === 0)
  if (filteredNums.length === count){
    return filteredNums.length;
  } else {
    return `Count is ${count} number`
  }
}

console.log(findEvenNum([1,2,3,4,5,6], 3))

//His response
const countEvenNumbers = (arr) => 
  arr.filter(num => num % 2 === 0).length;

const randomArr = (num) => {
  let arrayNum = []
  for (let i = 0; i < num; i++){
    arrayNum.push(i);
  }
  return arrayNum;
}

console.log(countEvenNumbers(randomArr(25)))

/* 
====================
Exercises part 3
Question 3
Write a javascript program to check whether a given array of intergers is sorted in ascending order

===================
My Pseudo code - 
** Create a function that checks if an array is sorted
** Create another function that generates random numbers and push them into an array
** 
*/

const isArraySorted = (arr) => {
  return arr.sort()
}

console.log(isArraySorted([1,2,5,6,7,3,1,3]))

//His response
const isAscending = (arr) => {
  for(let i = 0; i < arr.length; i += 1) {
    if (arr[i + 1] < arr[i]) return false
  } 
  return true;
}

console.log(isAscending([1,2,4,5,6,3,5,6,2,]))

/* 
====================
Exercises part 3
Question 4
Write a javascript program to get the largest even number from an array of intergers

===================
My Pseudo code - 
** Create a function that accepts an array
** filter the array elements to even numbers only
** Return the highest even number
*/

const highestEvenNum = (arr) => {
  const filteredArr = arr.filter((num) => num % 2 === 0) 
  for (let i = 0; i < filteredArr.length; i++){
    return  Math.max(...filteredArr)
    }
  }

console.log(highestEvenNum([2,4,5,1,5,7,4,23,99,10]))

//His solutions
const highestEvenInt = (arr) => Math.max(...arr.filter((num) => num % 2 === 0))

console.log(highestEvenInt([2,4,5,1,5,7,4,23,99,10]))

/* 
====================
Exercises part 3
Question 5
Write a javascript program to replace the first digit in a string (should contain at least digit) with $ character

===================
My Pseudo code - 
** Create a function that accepts a string
** Loop over string to find if it has an interger
** If true, replace the interger with the $ character
*/

const replacefirstDigit = (str) => {
  return str.replace(new RegExp("[0-9]"), "$")
}

console.log(replacefirstDigit('Mark736et'))

/* 
====================
Exercises part 4
Question 1
Given a year, report if it's a leap year

===================
My Pseudo code - 
== Write a function that accepts a number parameter
== Check if the number put has 366 days / is a leap year
*/

const isLeapYear = (year) => year % 400 === 0

console.log(isLeapYear(2000))

/* 
====================
Exercises part 4
Question 2
Write a javascript program to compare two objects to determine if the first one contains the same properties as the second one (Which may also have additional properties)

===================
My Pseudo code - 
== Function accepts two parameters
== Filter the second one if it contains the same properties of the first one

*/

const name1 = {
  name: 'John',
  address: '25 road'
}
const name2 = {
  name: 'John',
  address: 'What'
}

const objProperties = (obj1, obj2) => {
  if (obj1.name === obj2.name){
     return true
  } else {
    return false
  }
} 

console.log(objProperties(name1, name2))

//His solution
const objA = {a: 1, b: 2, c: 1}
const objB = {a: 1, b: 1, c: 1}
const objC = {a: 1, b: 1, d: 1}

const objectsEqual = (a,b) =>
  Object.keys(a).every(key => b[key]);
  

console.log(objectsEqual(objA, objB))

/* 
====================
Exercises part 4
Question 3
Write a javascript program to convert a comma-separated values string to a 2d array. A new line indicates a new row in the array

Example:
-----------
abc,def,ghi
jkl,mno,pqr,
stu,vwx,yza

===================
My Pseudo code - 
== Accepts one parameter
== Split the str first
== Loop over the string

*/


const toArray = (str) => 
  str.split('\n')

const text = `abc,def,ghi 
jkl,mno,pqr
stu,vwx,yza`

console.log(toArray(text))

//The solution
const parseCSV = (csvString) =>
  csvString.split('\n').map(row => row.split(','))

  const strCSV = `abc,def,ghi
jkl,mno,pqr
stu,vwx,yza`

console.log(parseCSV(strCSV))

//My second trial
const outerArr = (str) =>  str.split('\n').map((arr) => arr.split(','))

const arrText = `abc, def, ghi
jkl,mno,pqr
stu,vwx,yza`

console.log(outerArr(arrText))

/*Exercises part 4
Question 4
Write a javascript program to generate a random hexadecimal code

===================
My Pseudo code - 
-- Hexadecimal code has 16 letters from 0 - F
-- Create an array of 0 - f
-- Get a random figure from the array length by looping over the array
-- Cut the loop when the number is 6

*/

//Solution found on comment section
const randColor = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D', 'E', 'F']

const randomHex = () => {
  let result = '#'
  for (let i = 0; i <= 5; i++){
   let number = Math.floor(Math.random() * randColor.length);
   result += randColor[number]
}
return result
}

console.log(randomHex())

//His solution
const generateHexNum = () => 
  Math.floor(Math.random() * 16).toString(16)

console.log(generateHexNum())


const getHexColor = (num) => {
  for (let i = num; i < 7; i++) {
    return num.push(i)
  }
}

console.log(getHexColor(generateHexNum()))

/*Exercises part 4
Question 4
Write a javascript program that returns true if the provided predicate function returns true for all the elements in a collection, false otherwise

===================
My Pseudo code - 
-- Write a function that accepts another function and runs it against an array
-- If the function passed in the (inner function) is true for all the items in the array, return true overall

*/

const innerArr = (func) => {
  for (let fun of func) {
    console.log(fun)
    if (fun + 1 < fun){
      return `Yes, greater than initial interger`
    } else {
      return `Nope, didn't work`
    }
  }
}

console.log(innerArr([0,2,3,4,5,6]))

const predicateArr = (func) => {
  func.some()
}

console.log(innerArr([2,4,5,6,7,8]))

//His response
