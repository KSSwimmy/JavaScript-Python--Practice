// Sorted Stack 
class Stack {
    constructor() {
      this.storage = [];
    }
  
    push(item) {
      this.storage.push(item);
    }
  
    pop() {
      return this.storage.pop();
    }
  
    peek() {
      return this.storage[this.storage.length-1];
    }
  
    isEmpty() {
      return this.storage.length === 0;
    }
  
    printContents() {
      this.storage.forEach(elem => console.log(elem));
    }
  }

// Write a function sortStack that receives a stack of integers and returns another 
// stack containing those same integers in sorted order. You may use at most one
// additional stack to hold items, but you may not copy the elements into any other
// data structure.

function sortStack(stack) {
    let sortedStack = new Stack();
    let temp = null;

    let length = stack.storage.length

    // Plan B Loop is same
// Move top of input to output
    sortedStack.push(stack.pop())
    // Loop
    while(sortedStack.storage.length < length) {
    // If not temp:
        if (temp == null) {
    // Compare is peek inputStack > peek outputStack
            if (stack.peek() > sortedStack.peek()) {
    // If yes: move it to top of output
                sortedStack.push(stack.pop())
            } else {
                  // If no:  move it to temp
                  temp = stack.pop();
            }
        } else {
    // Else:
    // Compare is peek outputStack > temp
            if (sortedStack.peek() > temp) {
// If yes: move top of output to top of input
                stack.push(sortedStack.pop())
            } else {
  // If no: Move temp to top of output and clear
                sortedStack.push(temp);
                temp = null;
            }
        }
    }

    return sortedStack
}

const s = new Stack();
s.push(4);
s.push(10);
s.push(8);
s.push(5);
s.push(1);
s.push(6);

const sortedStack = sortStack(s); // sortedStack is also a Stack instance

sortedStack.printContents();  // should print 1, 4, 5, 6, 8, 10

// Time Complexity is O(n^2)