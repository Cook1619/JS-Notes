//If a user has Javascript turned off you can give them a message wrapped in the <noscript></noscript> tags

//Variables types
//Number
var num =  5;//typeof number
//Boolean
var isMarried = true;//typeof equals boolean
//String
var str = "Hello World";//typeof equals a string
//Null, is an absense of a value
var var1 = null; // typeof equals an object
//undefined
var arr2; //if you console.log arr2 it will be undefined, it was initialized, but never assigned a value. Typeof equals undefined
//NaN
var num2 = NaN; //You would never set a value to NaN, its typically the returned value of a mathematical calculation, like if you multiply a string and a number together. typeof equals a number

//Array, can hold all types of variables, are 0 indexed, the index is always 1 less than the length of the array
var arr = [1,2,3,4,'Hello', true]//typeof equals object
//Object




//EQUALITY

// == // checks for equal values for instance
// === // checks for value and type
let two = 2;
let too =  '2';

console.log(two == too); //returns true
console.log(two === too); //returns false

