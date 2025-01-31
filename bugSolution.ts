function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a + b;
}

let result = add(5, 5); // Correct usage
console.log(result); // Output: 10

try {
  let result2 = add("hello", 5);
} catch (error) {
  console.error(error.message); // Output: Inputs must be numbers
}

//Alternative solution using a type guard
function isNumber(x: any): x is number {
  return typeof x === 'number';
}

function add2(a: any, b: any): number {
  if (!isNumber(a) || !isNumber(b)) {
    throw new Error('Inputs must be numbers');
  }
  return a + b;
}

let result3 = add2(5, 5); // Correct usage
console.log(result3); // Output: 10

try {
  let result4 = add2("hello", 5);
} catch (error) {
  console.error(error.message); // Output: Inputs must be numbers
} 