//If a user has Javascript turned off you can give them a message wrapped in the <noscript></noscript> tags

/******Variables types*********/
//Number
var num = 5; //typeof number
//Boolean
var isMarried = true; //typeof equals boolean
//String
var str = "Hello World"; //typeof equals a string
//Null, is an absense of a value
var var1 = null; // typeof equals an object
//undefined
var arr2; //if you console.log arr2 it will be undefined, it was initialized, but never assigned a value. Typeof equals undefined
//NaN
var num2 = NaN; //You would never set a value to NaN, its typically the returned value of a mathematical calculation, like if you multiply a string and a number together. typeof equals a number

//Array, can hold all types of variables, are 0 indexed, the index is always 1 less than the length of the array
var arr = [1, 2, 3, 4, "Hello", true]; //typeof equals object
//Object
var obj = {
  //Field  //Value
  name: "Matt",
  isMarried: true
};
//On the left is always the field, on the right in the value, think of an object as a container for variables. Typeof returns object. You can obtain a value in an object using do notation as such
console.log(obj.name);
//OR Bracket Notation
console.log(obj["name"]);

/*****EQUALITY********/

// == // checks for equal values for instance
// === // checks for value and type
let two = 2;
let too = "2";

console.log(two == too); //returns true
console.log(two === too); //returns false

//STRICT MODE//

//On the top of the file if you put "use strict" it forces you to write more explicit code
//For instance if you wrote
//BAD
blue = "blue";
//GOOD
var blue = "blue";
//If you didn't use the 'use strict' at the top of your file you could use that variable fine, but if you have strict mode enabled it would be undefined because your didn't declare the variable with var, let, or const before the variable name

//JAVASCRIPT is case sensative

//Variables can be reassigned without re-declaring
var num1 = 4;
console.log(num1); // 4
num1 = 7;
console.log(num1); // 7

//Javascript uses dynamic typing, meaning if a variable can change types after reassignment
var num1 = 2; //type number
num1 = "hello"; //type string

//HOISTING
//The browser runs over your code twice, the first time it fetches all your declarations and brings them to the top of the file, the second time around it runs the code.

var1 = 5;
console.log(var1);
var var1;
///turns into

var var1;
var1 = 5;
console.log(var1);
//After hoisting

//DECLARING
var num1;
//INITIALIZING AND OR ASSIGNING
num1 = 1;

//FUNCTIONS, they return typeof function
//Think of functions as instructions of code to run, they contain logic you want to be ran

//This defines a function, this one is a function declaration
function calc() {
  console.log("Inside the function");
}
calc(); //This calls the function

//This is a function expression, its a function that is assigned to a variable
var doMore = function() {
  console.log("Hello world");
};
doMore(); //gets called the same way

//You can assign functions to variables, and call the variable like you would the initial function

var moreCalc = calc;
moreCalc();
//Functions are made to do some job or calculation and return a value as such
function logSomething() {
  return "Hello World";
}
console.log(logSomething());
//Now that this function returns something we can assign the result of the function to another variable
var hello = logSomething();
console.log(hello);
//num1 and num2 are called parameters of a function
function calcAdd(num1, num2) {
  return num1 + num2;
}
//The values supplied to the function call are call arguements
calcAdd(2, 3); //5

/******IF STATEMENTS********/
//Otherwise known as control statements
//In an IF statement if true it will run the block of code, if false it exits the block. So it only looking for true and false, but you cna explicity write if(condition === true) if you would like
var condition = 1;
if (condition) {
  console.log("Its true!!");
}
//You can further testing for conditions with if else() statements
if (condition) {
  console.log("TRUE");
} else if (condition === 1) {
  console.log("condition is equal to 1");
} else {
  console.log("Nothing is true");
}
//Once a condition is true it exits the code block, even if the else if is true, if your first statement is true it will not execute

//CAVEAT TO CONDITIONALS
// 0 is equal to false using ==, 1 is equal to true using ==, All other numbers in conditionals are truthy and treated as true

//Falsey values in Javascript
//false, 0, "", null, undefined, NaN
//All other values are truthy

//*********Switch Statements********/
var luckyNumber = 8;

switch (luckyNumber) {
  //case, and then the value you want to test the condition
  case 1:
    console.log("Number is 1");
    break;
  case 8:
    console.log("Number is 8");
    break;
  default:
    //if now cases are true, it will have a default
    console.log("Default");
}
//Break, breaks out the the switch statment and executes the code underneath the case statement. If you didn't add a break it would keep running through all the case statements until it sees a break. Once it finds the true case it will run that and any other cases or defaults under that true case.

/*********LOOPS**********/
//FOR LOOP
//How the for loop is structured. 
//var i = 0; This sets up a variable of a initial value, typically its 0
//i < 5; this is the condition of true or false and it its true the loop continues. this is checkk if i < 5
//i++ increments i through each loop, so i wont be the same value to each iteration, if we didn't have this it would create an endless loop
//{} the block of code it what you want to do through each iteration,
//this code is just printing the number i
for(var i =0;i < 5; i++){
    console.log(i);
}//0,1,2,3,4