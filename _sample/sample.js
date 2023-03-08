let method1 = (inputs) => {
  return [];
};

let method2 = (inputs) => {};

let inputs = ["a", "b", "c"];

let expected = "ABC";

console.assert(method1(inputs) === expected);
console.assert(method2(inputs) === expected);
