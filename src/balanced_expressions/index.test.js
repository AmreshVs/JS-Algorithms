import Expression from "./index.js";

let expression = new Expression();

test("Balanced Expressions Test 1 - isBalanced - Truthy", () => {
  expect(expression.isBalanced("(a+b)")).toBeTruthy();
  expect(expression.isBalanced("(a+b())")).toBeTruthy();
  expect(expression.isBalanced("(a+b(){})")).toBeTruthy();
  expect(expression.isBalanced("(a+b()<{}>)")).toBeTruthy();
  expect(expression.isBalanced("({a+b}()<{}>)")).toBeTruthy();
  expect(expression.isBalanced("<({a+b}()<{}>)>")).toBeTruthy();
});

test("Balanced Expressions Test 2 - isBalanced - Falsy", () => {
  expect(expression.isBalanced("(a+b))")).toBeFalsy();
  expect(expression.isBalanced("(a+b(())")).toBeFalsy();
  expect(expression.isBalanced("(a+b(<){})")).toBeFalsy();
  expect(expression.isBalanced("(a+b()<<{}>)")).toBeFalsy();
  expect(expression.isBalanced("({a+b}({)<{}>)")).toBeFalsy();
  expect(expression.isBalanced("<({{a+b}()<{}>)>")).toBeFalsy();
});
