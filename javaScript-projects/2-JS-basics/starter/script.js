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

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// // Multiple operators ////////////////////
// var isFullAge = now - yearJohn >= fullAge; // true
// console.log(isFullAge);

// // Grouping /////////////////////////////
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

/*
// Multiple assignments  ////////////////
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y); // 26 26

// More operators 
x *= 2;
console.log(x); // 52

x *= 10;
console.log(x); // 520

// All of this is the same thing //////////////
x = x + 1;
console.log(x); //521

x += 1;
console.log(x); //522

x++;
console.log(x); //523

x--; 
console.log(x); //522
///////////////////////////////
var kimberly, ida, tim;
kimberly = 29;
tim = 60; 
ida = 64; 

var year = 2019;
console.log(kimberly);
console.log(tim, ida);
*/

/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

// JohnHeight = 










/*
//STEP 1 -- Store mark and john's info ///////////////////////
var markMass, johnMass, markHeight, johnHight, name1, name2 ;

name1 = 'Mark';
markMass = 78; //kg
markHeight = 1.69; // meters

name2 = 'John';
johnMass = 92; //kg
johnHeight = 1.95;

//STEP 2 -- 2. Calculate both their BMIs //////////
var markBMI = markMass / (markHeight * markHeight);

var johnBMI = johnMass / (johnHeight * johnHeight);
console.log(markBMI, johnBMI);

var isMarkHigher = true;

//or

var isJohnBMIhigher = markBMI < johnBMI;
console.log(isJohnBMIhigher); //false

//console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is she married? ' + isMarried);

//STEP 3 -- 4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
console.log(' Is ' + name1 + '\'s' + ' BMI ' + 'higher than ' + name2 + '\'s' + '? ' + isJohnBMIhigher); //  Is Mark's BMI higher than John's? false

*/

/*
////////////////////////////////////////////////////////////////////////////////////////////////////////
//IF ELSE STATEMENTS 

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon 😀');
}
// if civil status is "married" then print out "John will hopefully marry soon :)"

// John will hopefully marry soon :)


var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!'); //John will hopefully marry soon :)
} else {
    console.log(firstName + ' will hopefully marry soon 😀'); 

}

var markMass, johnMass, markHeight, johnHight, name1, name2 ;

name1 = 'Mark';
markMass = 78; //kg
markHeight = 1.69; // meters

name2 = 'John';
johnMass = 92; //kg
johnHeight = 1.95;

var markBMI = markMass / (markHeight * markHeight);

var johnBMI = johnMass / (johnHeight * johnHeight);
console.log(markBMI, johnBMI);


if (markBMI > johnBMI) {
    console.log('Nope');
} else {
    console.log('Yup');
}
*/

/*
///////////////////////////////////////////////////////////////////////////////////////////////////
//BOOLEAN LOGIC 

var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 || age < 30) {
    console.log(firstName + ' is a young man.'); // John is a young man 
} else {
    console.log(firstName + ' is a man.');
}


if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 || age < 20) {
    console.log(firstName + ' is a teenager.'); // John is a teenager 
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');  
} else {
    console.log(firstName + ' is a man.');
}


if (!age < 13) {
    console.log(firstName + ' is a boy.'); // John is a boy
} else if (age >= 13 || age < 20) {
        //true       or  //
    console.log(firstName + ' is a teenager.'); 
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');  
} else {
    console.log(firstName + ' is a man.');
}


//AND ( && ) : true if all are true 
//OR ( || ) : true if one is true
//NOT ( ! ) : inverts true/false value 

var ageD = 20; 

age >= 20; // false
age < 30; //true 
!(age < 30); //false 

age >= 20 && age < 30; // false 
age >= 20 || age < 30; // true
 
*/

///////// THE TERNARY OPERATOR (CONDITIONAL) AND SWITCH STATEMENTS ///////////////////////////////////////////////////////////////////////////////
// The Ternary Operator - The if/else statement all in one line 

/*
* condition 
* if block
* else block
*/

// var firstName = 'John';
// var age = 21;

// //condition          //if block                                      //else block
// age >= 21      ?     console.log(firstName + 'drinks beer.')    :    console.log(firstName + ' drinks juice.'); // John drinks juice.

// //the above code rewritten in a one liner
// age >= 21 ? console.log(firstName + 'dinks beer.') : console.log(firstName + ' dinks juice.'); 


//                 // Is 21 greater than or equal 2 18?      // if he is then : beer    // is he is not then : juice
// var drink =    age >= 18 ?                                'beer' :                   'juice';
// console.log(drink);

// //the above code rewritten in a one liner
// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

//Below is the same thing as above:  
// if (age >= 18) {
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }

//SWITCH STATEMENT //////////////////////////

// switch is going to look for the string 'instructor' you can assign multiple values 

/*
var job = 'instructor';
switch (job) {
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.'); // John teaches kids how to code. 
        break; // Without the break keyword it will continue evaluating, looking for instructor 
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}


var job = 'Cop';
switch (job) {
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break; // Without the break keyword it will continue evaluating, looking for instructor 
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.'); // John does something else
}


var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break; // Without the break keyword it will continue evaluating, looking for instructor 
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.'); // John does something else
}


age = 56;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default: //
        console.log(firstName + ' is a man.');
}

*/

// var firstName = 'John';
// var age = 20;

// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager.');
// } else if (age >= 20 || age < 30) {
//     console.log(firstName + ' is a young man.'); // John is a young man 
// } else {
//     console.log(firstName + ' is a man.');
// }


// TRUTHY AND FALSY VALUES AND EQUALITY OPERATORS //////////////////////////////////////////////////////////////////

// Falsy values: undefined. null, 0, '', NaN (Not a Number)
// Truthy values: NOT falsy values 

/*
var height; // undefined 

// If we define the variable with 0 it will still come out to be 'Variable isn't defined'
height = 0;

// A handy way of testing to see if a falsy value is being defined
if (height) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined'); // it will be this because it isn't defined.
}

// the OR operator is true if one is true
// another way to check to see if the variable has been defined 
if (height || height === 0) {
    console.log('Variable is defined'); // it will be this because it is defined.
} else {
    console.log('Variable has NOT been defined'); 
}

var height2 = 23;

// Equality operators 
// So you see, the equal equal operator does type coercion. When we use this operator here, it converts the string of 23 to a number. 
//and then says that it's the same as 23, the number.
// So again, JavaScript does type coercion, which basically means to convert this string here to a number, and then compares the numbers, and then of course they are the same.
if (height2 == '23') {
    console.log('The == operator does type coercion!');
}

//Strict Equality
// === is equal to 'whatever'
if (height2 === '23') {
    console.log('The == operator does type coercion!'); // WILL NOT show in the console because it is false 
}
*/
/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

/*
var scoreJohn = (189 + 120 + 103) / 3; // 137.33333333333334 John is the winner 
var scoreMike = (129 + 94 + 123) / 3; // 115.33333333333333

//Mary is the bonus question
var scoreMary = (97 + 134 + 105) / 3; // 112
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike) {
    console.log('John is the winner winner chicken dinner!' + ' ' + scoreJohn);
} else if (scoreMike > scoreJohn) {
    console.log('Mike\'s team wins with' + ' ' + scoreMike)
} else {
    console.log('There is a draw');
}

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary\'s team wins with ' + scoreMary + ' points');
} else {
    console.log('There is a draw');
}

// FUNCTIONS ///////////////////////////////////////////////////////////////////////////////////

var ageIda = calculateAge(1954);
var ageKim = calculateAge(1989);
var ageTim = calculateAge(1955);

function calculateAge(birthYear) {
    return 2019 - birthYear;
}
console.log(ageIda, ageKim, ageTim);

// New function
function yearsUntilRetirement(birthYear, firstName)
{
    var age = calculateAge(birthYear);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.')
    } else {
        console.log(firstName + ' is already retired.')
    }

    console.log(firstName + ' retires in ' + retirement + ' years.')
}

yearsUntilRetirement(1954, 'Ida'); // (birthYear, firstName) 
yearsUntilRetirement(1989, 'Kim');
yearsUntilRetirement(1955, 'Tim');

// var newHire = whatIfImGoodAtBoth('kSSwimmy');

// function whatIfImGoodAtBoth(hireMe) {
//     return hireMe;
// }
// console.log(newHire);


const IfImGoodAtBoth = 'Design and Programming';

 newHire = (IfImGoodAtBoth) => { 
    return "KSSwimmy";
};

console.log(IfImGoodAtBoth + ', productivity all in one 🎨💻');

*/

// FUNCTION STATEMENTS AND EXPRESSIONS /////////////////////////////////////////////

// Function declaration 
//function whatDoYouDo

// Function expression
// var whatDoYouDo = function(job, firstName) {
//     switch(job) {
//         case 'teacher':
//         return firstName + ' teaches kids how to code';
//         case 'driver':
//         return firstName + ' drives a cap in Lisbon';
//         case 'designer':
//             return firstName + ' designs beautiful websites';
//         default:
//             return firstName + ' does something else';


//     }
// }
// console.log(whatDoYouDo('designer', 'Kimberly'));
// console.log(whatDoYouDo('teacher', 'John')); 


// ARRAYS ////////////////////////////////////////////////////////////////

// // Initialize new array
// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);

// console.log(names[2]);
// console.log(names.length);

// // Mutate array data
// names[1] = 'Ben';
// names[names.length] = 'Mary';
// console.log(names);

// // Different data types
// var john = ['John', 'Smith', 1990, 'designer', false];

// john.push('blue');
// john.unshift('Mr.');
// console.log(john);

// john.pop();
// john.pop();
// john.shift();
// console.log(john);

// console.log(john.indexOf(23));

// var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
// console.log(isDesigner);

// OBJECTS AND PROPERTIES//////////////////////////////////////////////////////////////////////////////

// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false
// };

// console.log(john.firstName); //dot notation
// console.log(john['firstName']); //bracket notation

// var x = 'birthYear'
// console.log(john[x]); //another way

// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);

// // new Object syntx
// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);
/*
// OBJECTS AND METHODS//////////////////////////////////////////////////////////////////////////////
//Only objects have methods


// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function(birthYear) {
//         return 2018 - birthYear;
//     }
// };

// console.log(''john.calcAge(1990));

// THE THIS KEYWORD //////////
//because the birthYear is already declared we use the 'this' keyword
// the 'this' keyword means the present and current object
*/

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        return 2018 - this.birthYear;
    }
};

john.age = john.calcAge()

console.log(john.calcAge())


var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear; // stored the age into the object.
    }
};

john.calcAge();

console.log(john);


