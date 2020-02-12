#REVERSE A STRING /////////////////////////////////////////////////////////////////////////

# string = 'Hello Word' [::-1]
# print(string)

#other solutions //////////////////

#Make a function
# def this_function(backwards):
#     return backwards[::-1]
# theOtherSting = this_function('This is what the string looks like backwards')
# print(theOtherSting)

#REVERSE A NUMBER ///////////////////////////////////////////////////////////////////////////
# num = 4562
# reverse = 0

# while (num > 0):
#     remainder = num % 10
#     reverse = reverse * 10 + remainder
#     num = num / 10
# print(reverse) 
# FAILED ATTEMPT 

# Python 3 program to reverse digits 
# of a number 
rev_num = 0
base_pos = 1
  
# Recursive function to reverse 
# digits of num 

# ***Global**** keyword in Python. Global keyword is a keyword that allows a user to modify a variable outside of the current scope. 
#It is used to create global variables from a non-global scope i.e inside a function.
def reversDigits(num): 
    global rev_num 
    global base_pos 
    if(num > 0): 
        reversDigits((int)(num / 10)) 
        rev_num += (num % 10) * base_pos 
        base_pos *= 10
    return rev_num 
      
# Driver Code  
num = 4562
print("Reverse of no. is ", 
         reversDigits(num)) 

#//////////////////////////////////////////////////////////////////////////////////////