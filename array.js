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