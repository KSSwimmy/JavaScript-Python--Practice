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
  
///////////////////////////////////////// ANOTHER SOLUTION (BEST PRACTICE)
countBits = n => n.toString(2).split('0').join('').length;