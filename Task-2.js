// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
const positiveNumber = (arr) => {
  let number = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      number = number + arr[i];
    }
  }
  return number;
};
// console.log(positiveNumber([2, -5, 10, -3, 7]));
