let nums = [10, 3, 7, 20, 13, 2];

// 1. Squares
let squares = nums.map(num => num * num);
console.log("Squares:", squares);

// 2. Prime numbers
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
let primeNums = nums.filter(isPrime);
console.log("Prime Numbers:", primeNums);

// 3. Sum
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum);

// 4. Descending order
let descending = nums.sort((a, b) => b - a);
console.log("Descending:", descending);