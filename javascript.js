// hint this is a math function it just looks stupid
const c = (o, n, n2) => {
  return o == "*" ? n * n2 : "i don't know";
};

console.log(c("*", 5, 5));
console.log(c("+", 5, 5));

// Any data given to a function is called an argument
// eg in python def function(arg1, arg2) -- the function has 2 arguments
// Arguments can be any data type

// Task 1
// basic math functions - change python functions to Javascript
var num1 = 4
var num2 = 5
const sum = (num1, num2)=>{
  return num1+num2
}
console.log(sum(num1, num2));

// Task 2
// return any string argument given backwards
var str = "hello";
console.log(str)
var output = str.split('').reverse().join('');
console.log(output);
//split into an array so to individually reverse letters. then convert back from array with join

// Task 3
// Take any string make it lowercase or uppercase based on the arg(s) given
let text = "MiX OF upPer anD LOweR" 
console.log(text.toUpperCase())
console.log(text.toLowerCase())
// Task 4
// Return a random number between 1 and 100 every time the function is called
// Module is math - random
// Bonus challenge: Rounded to 2 decimals
// bonus 2 round up or down numbers
let x = Math.floor(Math.random() * 100) +1; //math.floor rounds down (challenge 2)
console.log(x);
//bonus 1 round to 2DP:
let y = (Math.random() * 100) +1;
y = y.toFixed(2)
console.log(y)

//challenge 2 round up
let n1 = 0.5;
Math.ceil(n1)
console.log(Math.ceil(n1));


// Task 5
// What are the datatypes called in Javascript - list in comments next to Python equivalent

//javascript declares a variable using var, let or const ...   Python does not declare variables
//const is used if a value should not be changed. ie in arrays or objects
//let is used if const can't be used
//var is only used in browsers that predate 2015

//javacript comment = //  Python comment = #

//multiline comment = /*  python = #
//                    */           #

//javascript arrays store data      Python lists store data

//Javascript does not have built in dictionary function     python does use disctionary

//javascript uses Math.floor() to round down     python uses // for integer division

//javascript compares datatypes using ===    python just uses ==

//to print to terminal javascript uses console.log()  python uses print()

//to prompt user input javascript uses window.prompt(message)      Python uses input()

//python conditionals require indentation to indicate which lines belong to conditional
//python uses colon(:) after if statement whereas javascript uses curled parentheses({})
//in if loop python uses elif: whereas javascript uses else if {}

//for loop in python uses for, then loop variablem, then 'in' range(), specifying parametres. then use colon and indented body of loop
// in javascript for is followed by parentheses loop variable and  initial value is defined with the parentheses with the condition to stop the loop. Then curly braces follow for code block and body of loop indented

//python function is defined with def then the name of the funtion and parametres of function within parentheses. Then a colon
// javascript dfines function with word function instead of def and then surrounds body of function with {}

//defining classes for shared aspects is the same in both Python and javascript in that they both begin with the word class followed by the name
// the only difference is that Python uses a colon after the name and javascript uses {}. Both require uppercase letter for class name

// to run a file in terminal python uses python followed by filename.py
// javascript uses node followed by filename.js


// Bonus task - figure out how to get user input working
// getArgs or something like that from the user

let username = window.prompt("what is your username?");
console.log(username);

// Lets do Javascript --> document & window changes --
// Augment HTML
// document.html - javascript alerts - to-do submission form
