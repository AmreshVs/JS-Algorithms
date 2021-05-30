let stringObject = {};

function charToKeyValuePairs(string) {
  for (let char of string) {
    if (typeof stringObject[char] === 'number') {
      stringObject[char]++;
    }
    else {
      stringObject[char] = 1;
    }
  }
}

class FirstNonRepeatedChar {
  find(string) {
    stringObject = {};
    charToKeyValuePairs.call(this, string);

    for (let char of string) {
      if (stringObject[char] == 1) {
        return char;
      }
    }

  }
}

export default FirstNonRepeatedChar;