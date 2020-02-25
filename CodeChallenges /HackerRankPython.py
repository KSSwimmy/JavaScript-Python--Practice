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


