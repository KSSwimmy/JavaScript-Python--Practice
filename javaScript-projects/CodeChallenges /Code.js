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


/* 2. Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel. */


function disemvowel(str) {
    //remove vowels from a string ("a", "i", "o", "u")
    let stringy = ["This website is for losers LOL!"];
    
    str = stringy.replace(/^[aeiou]$/i, ""); 
     
      return str;
      
    }


