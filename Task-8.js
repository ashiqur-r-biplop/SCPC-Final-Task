function findSecondSmallest(arr) {
  if (arr.length < 2) {
    return "Array should have at least two elements";
  }
  let smallest = Infinity;
  let secondSmallest = Infinity;
  for (let num of arr) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }
  }

  return secondSmallest;
}
console.log(findSecondSmallest([5, 2, 9, 1, 7])); 
