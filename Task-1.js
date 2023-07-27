// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 
const reverse = (str) => {
  let string = "";
  for (var i = str.length; i >= 0; i--) {
    if(str[i]){
        string += str[i];
    }
  }
  return string;
};
// console.log(reverse("hello world"));