export default function StringReversal(normalString) {
  let reversedArray = [];
  let reversedString = "";

  // Logic to reverse the string with array
  this.reverse = function () {
    normalString.split("").forEach((item, index) => {
      reversedArray[normalString.length - (index + 1)] = item;
    });

    return reversedArray.join("");
  };

  // Logic to reverse the string without array
  this.reverseWithoutArray = function () {
    for (let index = normalString.length - 1; index >= 0; index--) {
      reversedString += normalString[index];
    }

    return reversedString;
  };

  this.reverseWithStack = function () {
    let stringArray = [];
    let reversedString = "";

    for (let char of normalString) {
      stringArray.push(char);
    }

    while (stringArray.length) {
      reversedString += stringArray.pop();
    }

    return reversedString;
  }

  this.balancedExpressions = function () {
    let expString = "(({}{(a)+{b}}))";
    let stack = [];

    let expressionPairs = {
      '}': '{',
      ']': '[',
      '>': '<',
      ')': '('
    };

    for (let char of expString) {

      if (Object.values(expressionPairs).includes(char)) {
        stack.push(char);
      }

      if (Object.keys(expressionPairs).includes(char)) {
        if (!stack.length) {
          return false;
        }

        let topOfStack = stack.pop();

        if (topOfStack != expressionPairs[char]) {
          return false;
        }
      }
    }

    return !stack.length;
  }
}


let check = new StringReversal();
console.log(check.balancedExpressions());