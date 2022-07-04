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

//
// Array of people
const people = [
  { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
  { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
  { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
  { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
  { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
  { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
  { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
  { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
  { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
  { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
  { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
  { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
];


/*
=====================
Exercises 1

1) What is the average income of all the people in the array?
=====================
Pseudo code 
== Use the for-in
== Initialize a variable
== Add each iteration to the initialized variable

*/
// My solution
let count = 0;
for (person in people) {
  console.log(person)
  count += parseInt(`${person}`);
  console.log(count)
}

// His solution
people.reduce((accumulator, person) => accumulator + parseInt(person.salary), 0) / people.length

// 2) Who are the people that are currently older than 30?
people.filter(person => new Date().getFullYear() - new Date(person.DOB).getFullYear() >= 30)


// 3) Get a list of the people's full name (firstName and lastName).
people.forEach(() => {
  return people[0].firstName
})

// 4) Get a list of people in the array ordered from youngest to oldest.
people.sort

// 5) How many people are there in each department?

// Variables
const orders = [
  {
    orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
      { productId: '123', price: 55 },
      { productId: '234', price: 30 },
    ]
  },
  {
    orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
      { productId: '234', price: 30 },
    ]
  },
  {
    orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
      { productId: '567', price: 30 },
      { productId: '678', price: 80 },
    ]
  },
  {
    orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
      { productId: '789', price: 12 },
      { productId: '890', price: 90 },
    ]
  },
  {
    orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
      { productId: '901', price: 43 },
      { productId: '123', price: 55 },
    ]
  },
];

// Exercises

// 1) Get a list of the orders for the customer with the ID 234 that have not been delivered.
orders.filter(n => !(n.delivered)).map(n => n.customerId)

// 2) Create a new property on each order with the total price of items ordered.
const newOrders = orders.reduce((total, acc) => {
  orders.pop = total;
})

console.log(newOrders(orders.price, 0))


// 3) Have all the orders been delivered?
orders.every(num => num.delivered === true)

// 4) Has the customer with ID '123' made any orders?
orders.filter(num => (num.customerId === '123')).map(num => num.items)


// 5) Have any products with an id of 123 been sold?
orders.some((num) => num.items.productId === '123')

// Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.

const bill = {
  name: Chinenye,
  age: 21
}

const nenye = {
  name: laskelly,
  age: 30
}



function compareProperty(item, meti) {
  if (item.length === meti.length) {
    return `${item} and ${meti}`
  } else {
    return 'I don\'t know'
  }
}

console.log(compareProperty(bill, nenye))