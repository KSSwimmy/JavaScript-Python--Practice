/*

********** Variables and data types **********

var firstName = 'John'; // STRING
console.log(firstName);

var lastName = 'Smith';
console.log(lastName);

var age = 28; //NUMBER

var fullAge = true; //BOOLEAN
console.log(fullAge);

var job; 
console.log(job); //UNDEFINED 

job = 'Teacher';
console.log(job); // Will print out 'Teacher' in the console 

//LOOK UP RESERVED KEYWORDS FOR JavaScript 

//In JavaScript there are 5 different Data Types (PRIMITIVE JAVASCRIPT DATA TYPES)
// 1. NUMBER - Floating point numbers, for decimals and integers
// 2. STRING - Sequence of  characters, used for text
// 3. BOOLEAN - Logical data type  that can only be true or false 
// 4. UNDEFINED - Data type of a variable that does not have a value yet 
// 5. NULL - also means 'non-extent'

//JAVASCRIPT HAS DYNAMIC TYPING: DATA TYPES ARE AUTOMATICALLY ASSIGNED TO VARIABLES 

var _2years = 3; // underscore 
var kSwinton = 'Kimberly Swinton' // camelcase 
var if = 23; // wrong way because 'if' is a reserved keyword

*/

///////////////////////////////////////////////////////////////////////////////////

/* VARIABLE MUTATION AND TYPE COERCION */

/*
var firstName = 'Kimberly';
var age = 29;

// Type coercion 
console.log(firstName + ' ' * age);

var job, isMarried;
job = 'Software Engineer';
isMarried = false;

//console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is she married? ' + isMarried);
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is she married? ' + isMarried);


// Variable mutation
age = 'twenty nine';
job = 'Web Dev';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is she married? ' + isMarried); // Pops up to alert 

var lastName = prompt('What is her last Name?'); // Slides down from the URL bar to type in something
console.log(firstName + ' ' + lastName);
*/

/*

////////////////////////////////////////////////////////////////////////////////////////////////////////
//Basic operators 

//const yearKim = 2018 - 28;
const yeahTim = 1982 - 27;
//console.log(yeahTim);
////////////////////////////////


//DEFINE THE VARIABLE IN ONE PLACE 
//const year = 2018; // the dynamic way: assign a variable name, then assign a value. 
                     //Use the variable name multiple times as substitute of the value. 
                    // Then if you have to change the variable name, you can go back and change it one time. 

//const yearJohn = year - 28;
//const yeahMark = year - 33;
// console.log(yearJohn);
// console.log(yeahMark);
////////////////////////////////


//DEFINING MULTIPLE VARIABLES 
var year, yearJohn, yearMark;
year = 2019;
yearJohn = year - 28;
yearMark = year - 33; 
// console.log(yearJohn); //1991
// console.log(yearMark); // 1986
// console.log(yearJohn + 3); // 1994
// console.log(yearJohn / 10);
// console.log(yearJohn * 5);

// Logical operators
var johnOlder = yearJohn < yearMark;
//console.log(johnOlder);


// typeof operator
console.log(typeof johnOlder); // Boolean
console.log(typeof yearJohn); // Number
console.log(typeof 'Mark is older tha John'); // String
var x;
console.log(typeof x); // Undefined 
*/

///////////////////////////////////////////////////////////////////////////////////////////////////
//Operator precedence

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators ////////////////////
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping /////////////////////////////
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments  ////////////////
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);



////





