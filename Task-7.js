// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
const romanToInt = (roman) => {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < roman.length; i++) {
    const currentDigit = romanNumerals[roman[i]];
    const nextDigit = romanNumerals[roman[i + 1]];
    if (nextDigit > currentDigit) {
      result += nextDigit - currentDigit;
      i++;
    } else {
      result += currentDigit;
    }
  }
  return result;
};
console.log(romanToInt("III"));
