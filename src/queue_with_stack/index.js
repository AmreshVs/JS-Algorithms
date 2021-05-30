function moveItemsToStack2() {
  // Move the items to stack2 until the stack2 is empty
  if (!this.stack2.length) {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop());
    }
  }
}

class QueueWithStack {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    if (this.isEmpty()) throw new Error("Queue is empty");

    // Move from stack1 to stack2
    moveItemsToStack2.call(this);

    // Return the popped item
    return this.stack2.pop();
  }

  peek() {
    if (this.isEmpty()) throw new Error("Queue is empty");

    moveItemsToStack2.call(this);

    // Return the first item from stack
    return this.stack2[this.stack2.length - 1];
  }

  isEmpty() {
    return !this.stack1.length && !this.stack2.length;
  }
}

export default QueueWithStack;