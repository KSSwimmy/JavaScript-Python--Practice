/* 1. Write a function that takes an integer as input, 
and returns the number of bits that are equal to one in the binary representation of that number. 
You can guarantee that input is non-negative.
Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case */

var countBits = function(n) {
    //step 1: convert the number into binary.
    let conversion = (n >>> 0).toString(2); 
    //step 2: count all the ones in the binary.
    let count = 0;
    for (let i = 0; i < conversion.length; i++){ 
    if ( conversion[i].includes("1") ){ 
    count++
      } 
      console.log(conversion) 
    } //step 3: return the count.
      return count

  };

///////// ANOTHER SOLUTION /////////////////////////////////
countBits = n => n.toString(2).split('0').join('').length;
console.log(n.toString(2))
console.log(split('0'))
console.log(join('').length)


/* 2. Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel. */


function disemvowel(str) {
    //remove vowels from a string ("a", "i", "o", "u")
    let stringy = ["This website is for losers LOL!"];
    
    str = stringy.replace(/^[aeiou]$/i, ""); 
    console.log(str)
    return str;

    }

/* 3. Make a program that filters a list of strings and returns a list with only your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.*/

function friend(friends){
    //assign a var to an array of names
    
    //filter the list of names
    //if the names have 4 letters in it choose that one
    //if not then get rid of it
    const removeFriend = friends.filter(name => name.length === 4);
    
   //returns friend's name
    return removeFriend
}
    
///////// ANOTHER SOLUTION /////////////////////////////////
function friend(friends){
    // defined an empty array
    const myFriends = []
    // assigned number of friends to (friends) to get the length of friends
    const numberOfFriends = friends.length
    // loops through number of friends
    for (let i = 0; i < numberOfFriends; i++) {
      // assigned friend name to 
      const friendName = friends[i]
      // assigned isFriend to the variable friendName (friends[i]) that is the length of 4 
      const isFriend = (friendName.length === 4)
      if (isFriend) myFriends.push(friendName)
      console.log('This is const friendName',friends[i]) 
    }
    return myFriends
  }
  
///////// ANOTHER ANOTHER SOLUTION /////////////////////////////////

function friend(friends){
    //your code here
    var realFriends = [];
    for(i=0; i<friends.length; i++){
      if(friends[i].length == 4 && isNaN(friends[i])){
        realFriends.push(friends[i]);
      }
    }
    
    return realFriends
  }

/* Test.assertSimilar(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]);
Test.assertSimilar(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"]);
Test.assertSimilar(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"]);
Test.assertSimilar(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"]); */


/////////////////////////////////////////////////////////////////////////////////////////////// 

/* Overview: 10 Days of JavaScript
This series focuses on learning and practicing JavaScript. Each challenge comes with a tutorial article, and you can view these articles by clicking either the Topics tab along the top or the article icon in the right-hand menu.

Objective

In this challenge, we review some basic concepts that will get you started with this series. Check out the tutorial to learn more about JavaScript's lexical structure.

Task

A greeting function is provided for you in the editor below. It has one parameter, . Perform the following tasks to complete this challenge:

Use console.log() to print Hello, World! on a new line in the console, which is also known as stdout or standard output. The code for this portion of the task is already provided in the editor.
Use console.log() to print the contents of  (i.e., the argument passed to main).
You've got this!

Input Format

Data Type	Parameter	Description
string		A single line of text containing one or more space-separated words.
Output Format

Print the following two lines of output:

On the first line, print Hello, World! (this is provided for you in the editor).
On the second line, print the contents of .
Sample Input 0

Welcome to 10 Days of JavaScript!
Sample Output 0

Hello, World!
Welcome to 10 Days of JavaScript!
Explanation 0

We printed two lines of output:

We printed the literal string Hello, World! using the code provided in the editor.
The value of  passed to our main function in this Sample Case was Welcome to 10 Days of JavaScript!. We then passed our variable to console.log, which printed the contents of . */


/**
*   A line of code that prints "Hello, World!" on a new line is provided in the editor. 
*   Write a second line of code that prints the contents of 'parameterVariable' on a new line.
*
*	Parameter:
*   parameterVariable - A string of text.
**/
function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log:
     
parameterVariable: 'a string'
        console.log(parameterVariable)
}


//REVERSE STRING /////////////////////////////////////////////////////////////////////////////////////////////

function reverseString(str) {
    // Step1: use the .split() method to turn the string into an array of strings. 
    //console.log(str.split("")) // will look like "h" "e" "l" "l" "o" etc..
    
    
    let splitString = str.split('');
    
    // Step2: use the .reverse() method. Which reverses an array in place. 
    //Each individual string of letters will be reversed since we used the split method.
    
    let reversedString = splitString.reverse();
    
    // Step3: use the .join() method to crate a new string by joining the array together.
    
    let joinString = reversedString.join('');
    
    // Step4: Return joinString 
    
    return joinString;
    
  }
  
  //Invoke the 'reverseString'
  
  reverseString('hello world')

  //OTHER SOLUTIONS //////////////////////////////////////////////

  // v1.0
function reverseString(str) {
    let len = str.length;
    let reversed = '';
    for (let i = len; i > 0; i--) {
      reversed += str[i - 1];
    }
    return reversed;
  }
  
  // // v1.1
  // function reverseString(str) {
  //   let len = str.length;
  //   let reversed = '';
  //   for (let i = len - 1; i >= 0; i--) {
  //     reversed += str[i];
  //   }
  //   return reversed;
  // }
  
  // // v2.0 using an array
  // function reverseString(str) {
  //   let len = str.length;
  //   let arr = [];
  //   for (let i = len; i > 0; i--) {
  //     arr.push(str[i - 1]);
  //   }
  //   let reversed = '';
  //   for (let j = 0; j < arr.length; j++) {
  //     reversed += arr[j];  
  //   }
  //   return reversed;
  // }
  
  // // v2.2 using JavaScript methods
  // function reverseString(str) {
  //   let split =  str.split('');
  //   let reversed = split.reverse();
  //   let joined = reversed.join('');
  //   return joined;
  // }
  
  // // v2.3 dot chaining methods & returning their evaluation
  // function reverseString(str) {
  //   return str.split('').reverse().join('');
  // }
  
  // // v2.4 ES6 style
  // const reverseString = (str) => {
  //   return str.split('').reverse().join('');
  // };

//REVERSE NUMBERS //////////////////////////////////////////////////////////////////////////////////////////////////
//The ****parseFloat()**** function parses an argument (converting it to a string first if needed) 
//and returns a floating point number.
//parseFloat is a top-level function and not a method of any object.

//In this case the number gets converted into a string. 

   function reverseNumber(num) {
    return (
      parseFloat(num.toString().split('').reverse().join('')* Math.sign(num)
        )
      )
    
    }
    reverseNumber(12345);


    
//REVERSE CASING///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Write a function that takes in a string, reverses the 'casing' of that string, 
//and returns the "reversed-casing" string.

//NEEDS REVISING ******************************
function reverseCase(str) {
    let string = 'HELLO world!'
    
    let theArray = string.split(' '); //putting a space between the empty string inserts a comma between the space
    console.log(theArray)
    
    let newArray = [];
    
    
    // for(let index = 0; index < theArray.length; index++){
     newArray.reverse(theArray[0].toLowerCase() + ' ' + theArray[1].toUpperCase())
    // }
    
    return newArray.join(' ')
    //console.log()
  
}
//THE REVISED VERSION ****************************** Got help from Adetunji Shennaike * He helped make the function dynamic

function reverseCase(str) {

    let ans = str.split(''), res = ''
    ans.forEach( element => {
      if(element === element.toUpperCase()){
        res += element.toLowerCase()
      }
      else {
        res += element.toUpperCase()
      }
    })
    return res
  }
  const string = 'HELLO world!'
  reverseCase(string)

// FIZZ BUZZ /////////////////////////////////////////////////////////////////////////////////////////////
// Needs revising **************************** see screenshot of example code out put

function fizzBuzz(n) {
  // Write your code here
let str = '';


  if(!(n % 3)) str += 'Fizz'
  if(!(n % 5)) str += 'Buzz'


  console.log(str || n)


  if(n >= 100) return


  fizzBuzz(++n)
}
fizzBuzz(1)

//TO CAMEL CASING///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Good morning! Complete the function so that it converts dash-delimited ("kebab" case) & underscore-delimited 
//("snake" case) words into "camel" casing. 
//The first word within the output should be capitalized only if the original word was capitalized.

