// Array exercises
// Exercise 1
// Write a JavaScript function to check whether an `input` is an array or not

function isArr(arr) {
  return Array.isArray(arr)
}

console.log(isArr('Str'))

// Exercise 2
// Write a JavaScript function to clone an array

function cloneArr(arr) {
  const arr1 = arr;
  const arr2 = arr1;
  return arr2;
}

console.log(cloneArr([1, 2, 7]))

// Exercise 3
//  Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. 

function getArrEl(arr) {
  return arr[0]
}

console.log(getArrEl([NaN, 2, 3, 45]))

// Exercise 4
// Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. 
function lastArrEl(arr) {
  return arr[arr.length - 1];
}

console.log(lastArrEl([1, 2, 3, 4]))

// Exercise 5
// Write a simple JavaScript program to join all elements of the following array into a string.

function joinArr(arr) {
  return arr.join(',')
}

console.log(joinArr(["Red", "Green", "White", "Black"]))

// Exercise 6
// Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.
// Wrong answer but did try
function insertDash(nums, item) {
  for (let num of nums) {
    if (num % 2 === 0 || (num + 1) % 2 === 0) {
      return num + item
    }
  }
}

console.log(insertDash([1, 2, 3, 4, 5, 6, 7, 8], '-'))

// Exercise 7
// Write a JavaScript program to sort the items of an array.
const sortArr = [3, 8, 7, 6, 5, -4, 3, 2, 1];
sortArr.sort()

console.log(sortArr.sort())

// Exercise 8
// Write a JavaScript program to find the most frequent item of an array



function freqArray() {
  const arrItems = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
  for (let i = 0; i < arrItems.length; i++) {
    if (i === i) {
      return i;
    } else {
      return 'I don\'t know what happened'
    }
  }
}

console.log(freqArray())

// Exercise 9
// Write a JavaScript program which accept a string as input and swap the case of each character. 

function swapCase(strText) {
  let text = '';
  for (let i = 0; i < strText.length; i++) {
    if (strText[i] === strText[i].toLowerCase()) {
      text += strText[i].toUpperCase()
    } else {
      text += strText[i].toLowerCase();
    }
  }
  return text
}

console.log(swapCase('The Quick Brown Fox'))
console.log(swapCase('Chinenye'))


// Exercise 10
// Write a JavaScript program which prints the elements of the following array.
function printNestedArr(arr) {
  return arr.join('  ')
}

console.log(printNestedArr([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]))

// Exercise 11
// Write a JavaScript program to find the sum of squares of a numeric vector

// Exercise 12
// Write a JavaScript program to compute the sum and product of an array of integers.
const arraynums = [1, 2, 3, 4]
function computeArrSumProduct() {
  let newArr = 0;
  let secArr;
  for (let i = 0; i < arraynums.length; i++) {
    return newArr += arraynums[i];
  }
}

console.log(computeArrSumProduct())

// Exercise 14
// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
const arry = [1, 2, 1, 3, 4, 3, 5];

const toFindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index)

const duplicateElements = toFindDuplicates(arry);
console.log(duplicateElements);

//Failed
// function findDuplicate(arr) {
//   arr.filter((item, index) => {
//     return arr.indexOf(item) !== index
//   })
// }
// console.log(findDuplicate(arry))

// Exercise 16
// Write a JavaScript program to find the leap years in a given range of years.

function isLeapYear(arr) {
  return arr.filter((num) => {
    return ((num % 4 === 0)) || (!(num % 4 === 0) && ((num % 100 === 0) && (num % 100 === 0)))
  })
}

console.log(isLeapYear([1203, 1900, 1609, 1800]))

// Exercise 16
// Write a JavaScript program to shuffle an array
function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    console.log(randomIndex)
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

console.log(shuffle([2, 3, 45, 6, 1]))
