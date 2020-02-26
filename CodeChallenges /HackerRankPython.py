#December 2nd(3rd)nd, 2019

'''
Given a Stack class like the following:
'''
class Stack:
  def __init__(self):
    self.storage = []

  def push(self, item):
    self.storage.append(item)

  def pop(self):
    return self.storage.pop()

  def peek(self):
    return self.storage[len(self.storage) - 1]

  def is_empty(self):
    return len(self.storage) == 0

  def print_contents(self):
    for x in self.storage:
      print(x)

'''
PROBLEM: 
Write a function sortStack that receives a stack of integers 
and returns another stack containing those same integers in sorted order. 
You may use at most one additional stack to hold items, 
but you may not copy the elements into any other data structure.
'''

"""
Constraints: 
1. can't use other data structures 
2. we're allowed one additional stack 
3. Stacks have lifo odering (last in first out)
"""

# O(n^2) runtime:
# A function with a quadratic time complexity has a growth rate of n2. 
# If the input is size 2, 
# it will do four operations. If the input is size 8, 
# it will take 64, and so on. 
  
def sort_stack(input_stack):
  # invert the elements of the input stack 
  # given this baseline, how do we perform the sorting?

  # total number of outstanding stacks is 2 
  # use a while loop 
  # add the biggest number that's being pushed to 


  # add elements to the output stack from the input stack 
  # in ascending order 
  # whenever we need to add an element from the input stack to 
  # the output stack "underneath" a bunch of preexisting elements
  # already in the output stack, pop from the output stack until 
  # we can play the element from the input stack into the output 
  # in its appropriate spot 

  output_stack = Stack() 
  # add the top element from the input stack to the output stack 
  output_stack.push(input_stack.pop())

  # while the input stack is not empty
  while not input_stack.is_empty():
    # pop from the input stack and push to the output stack 
    # or hold the input stack element in a temp variable 
    temp = input_stack.pop()
    # compare the temp variable to the top of the output stack 
    # if the top of the output stack > temp 
    while not output_stack.is_empty() and output_stack.peek() > temp:
      # we want to move the temp value underneath it 
      # move the output stack element out of the way back to the input 
      # stack 
      input_stack.push(output_stack.pop())
    # at this point we've removed all of the elements from output 
    # stack that are > temp 
    # now we can add the temp value 
    output_stack.push(temp) 
    
  return output_stack

s = Stack()
s.push(10)
s.push(4)

sorted_stack = sort_stack(s)
sorted_stack.print_contents()  # should print 4, 10

# print a newline
print()

s.push(8)
s.push(5)
s.push(1)
s.push(6)
s.push(19)
s.push(4)

sorted_stack = sort_stack(s)
sorted_stack.print_contents()  # should print 1, 4, 5, 6, 8, 19

#Inserting a Node Into a Sorted Doubly Linked List 


#Truck Tour ######################################################################
#https://www.hackerrank.com/challenges/truck-tour/problem 
#December 5th, 2019
from queue import Queue #first in first out FIFO / #In hakerRank you don't have to make a Queue class when writing in Python. 

def truckTour(petrolpumps):
    # Your code here.
    # we need to know the index of the pump that allows us to
    # travel along the entire circle 
    route = Queue()

    # put all of the pumps in the queue 
    for p in petrolpumps:
        # insert the current pump into the queue 
        route.put(p)

    start = 0 
    tank = 0
    # keep track of how many pumps we've traversed 
    traversed = 0

    # to exhaustively check if we've found a pump that allows us to 
    # traverse all of the pumps, we could:
    # 1. use a queue data structure 
    # 2. use a while loop and loop until we have traversed all of
    # the pumps; when the while loop reaches the end of the array,
    # we'd need to circle back to the beginning by resetting the
    # index 

    # loop over every pair in the input array 
    while traversed < len(petrolpumps):
        # check how much gas is left after traveling to the next pump 
        # at the current pump, keep track of gas - distance 
        pump = route.get()
        gas, distance = pump
        # update our tank amount with the difference between
        # gas and distance 
        tank += (gas - distance)
        # if we see that we have a negative amount of gas left, 
        if tank < 0:
            # that means this pump is not valid 
            # consider the next pump
            start += traversed + 1
            # reset the tank 
            tank = 0
            traversed = 0
        else:
            traversed += 1

        # add the pump back to the queue
        route.put(pump)

    # return the pump index
    return start
    
 ###################################################################################### 
 # 
 # Frequency Queries Part 1 
 # 

 
 #/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 #/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


#Text Justification #####################################################################################
# https://app.codesignal.com/interview-practice/topics/strings
 #Thu Feb 20th 2020 

 
def text_justification(words, l):
    output = []
    line = []
    n_chars = 0

    for word in words:
        # add a space to n_chars only if we already have at least one word
        # this accommodates us adding a space for the last word in the line
        if n_chars > 0:
            n_chars += 1

        n_chars += len(word)

        # once we've overshot the length limit, add the current line to our result
        # and reset our current line and counter
        if n_chars > l:
            justified = handle_justification(line, l)
            output.append(justified)
            n_chars = len(word)
            line = []
        
        line.append(word)

    # special handling for the last line after we've iterated through all the words
    # turn the line into a string and then add any additional spaces we need
    if len(line) > 0:
        string = " ".join(line)
        string += (" " * (l - len(string)))
        output.append(string)

    return output


def handle_justification(line, l):
    output = ""

    # get total number of chars in the line
    n_chars = 0
    for w in line:
        n_chars += len(w)

    # extra spaces are the number of spaces we need to add on top of the spaces
    # that should already be in the line
    extra_spaces = l - n_chars
    # number of spaces that should already exist in the line
    normal_spaces = len(line) - 1

    # if there are no normal spaces in this line, then that means there is only
    # one word in the line; add all of the extra spaces after the word
    if normal_spaces == 0:
        return line[0] + (" " * extra_spaces)

    # padding is the number of spaces we need to add to every normal space to distribute
    # then evenly
    padding = extra_spaces // normal_spaces
    # remainder is any remaining spaces we need that don't evenly divide the number of
    # normal spaces
    remainder = extra_spaces % normal_spaces

    # for each word in the line, add on the number of spaces needed to evenly distribute
    # all of the spaces between every word
    for i, word in enumerate(line):
        spaces = padding
        
        # add on any remaining spaces we need to reach the length limit
        if i < remainder:
            spaces += 1
        
        # if this is the last word in the line, don't add any spaces to it
        if i == len(line) - 1:
            spaces = 0

        spaces = " " * spaces
        output += (word + spaces)

    return output

###################################################################################### 

 # Recursive Digit Sum | HackerRank 
 # https://www.hackerrank.com/challenges/recursive-digit-sum/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=recursion-backtracking

 # sum the digits of an int in string form 
# return an int
def sum_digits(p):
  l = [] 
  l[:0] = p
  return reduce(lambda x, y: int(x) + int(y), l)

def superDigit(n, k):
  # check the length of the string 
  # then check for the terminating case 
  # after the first recursive call, do we still need k? 
  # construct the actual P value by concatenating n k times 

  # recursing k times 

  # possible base case: 
  # 1. if k <= 0 return 0
  # 2. if P <= 9 (i.e. P is a single digit)
  # 3. check the length of P, but we'd have to transform P into either
  # a string or an array, since we can't take the length of a number 

  # repeat this k times: sum the digits of n 
  # recurse so long as P > 9 as a way to check if P has more than 1 digit 
  # if we recurse, then call the function with the sum from the previous 
  # recursion with k = 1
  # in any recursive calls, k will always be 1 

  # construct our p 
  # note that it's a string here 

  # if len(n) == 1 and k == 1:
  #   return int(n)

  p = str(sum_digits(n) * k)

  if len(p) < 2:
    return int(p)

  # call our sum_digits function 
  # this will update p to be an integer 
  # p = sum_digits(p)

  return superDigit(p, 1)

  # use the same function signature 
  # if we aren't in the base case, then P > 9 
  # sum the digits together 
  # how should we sum the digits together? 



#

