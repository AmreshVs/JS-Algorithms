import FirstNonRepeatedChar from "./index.js";


test("First Non Repeated Char Test 1 - find", () => {
  let firstNonRepeatedChar = new FirstNonRepeatedChar();

  expect(firstNonRepeatedChar.find("once in a year")).toBe("o");
  expect(firstNonRepeatedChar.find("a red apple")).toBe("r");
  expect(firstNonRepeatedChar.find("madam")).toBe("d");
  expect(firstNonRepeatedChar.find("river")).toBe("i");
});