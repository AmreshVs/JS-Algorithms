class Expression {
  isBalanced(stringToCheck) {
    let stack = [];

    // Create an object with close brackets as key and open brackets as value
    let expressionPairs = {
      '}': '{',
      ']': '[',
      '>': '<',
      ')': '('
    };

    // Iterate through the string
    for (let char of stringToCheck) {

      // Check if char belongs to values of expressionsPairs - Open Brackets
      if (Object.values(expressionPairs).includes(char)) {
        stack.push(char);
      }

      // Check if char belongs to keys of expressionsPairs - Close Brackets
      if (Object.keys(expressionPairs).includes(char)) {
        if (!stack.length) {
          return false;
        }

        // If close brackets is found pop it
        let topOfStack = stack.pop();

        // Check the popped expression with the expressionPairs, return false if not matching
        if (topOfStack != expressionPairs[char]) {
          return false;
        }
      }
    }

    // If stack length is one or more that it means there are no closing pairs
    // So if lenght is truthy then make it falsy
    return !stack.length;
  }
}

export default Expression;