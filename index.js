function sayHello() {
    return "Hello!";
  }
  
  console.log(sayHello()); // "Hello!"

  const sayHello = function() {
    return "Hello!";
  };
  
  console.log(sayHello()); // "Hello!"

  const add = (a, b) => a + b;

console.log(add(2, 3)); // 5

const square = x => x * x;
console.log(square(4)); // 16

const multiply = (a, b) => {
    console.log(`Multiplying ${a} and ${b}`);
    return a * b;
  };
  
  console.log(multiply(3, 4)); // 12
  