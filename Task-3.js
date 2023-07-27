// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.
const mostFrequentElement = (arr) => {
  let frequencyNumber = {};
  let mostFrequentNumber = arr[0];
  let maxFrequencyNumber = 0;
  for (let num of arr) {
    frequencyNumber[num] = (frequencyNumber[num] || 0) + 1;
    if (frequencyNumber[num] > maxFrequencyNumber) {
      maxFrequencyNumber = frequencyNumber[num];
      mostFrequentNumber = num;
    }
  }
  return mostFrequentNumber;
};
// console.log(mostFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5]));
