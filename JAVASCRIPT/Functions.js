function sum(a, b, c) {
  let d = a + b + c;
  return d;
}

// here b=1 means when we dont give the value of b in function calling then it will take 1 as default
function multiply(a, b = 1) {
  return a * b;
}

console.log(sum(1, 2, 3));
console.log(multiply(3));

// shortcut to create functions

greet = () => {
  console.log("good morning");
};

greet();

subtract = (a, b) => {
  return a - b;
};
subtract(10, 5);

