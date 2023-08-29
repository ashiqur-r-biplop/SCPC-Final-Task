// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
const generateRandomPassword = (length) => {
  const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const LowerCase = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const SpecialCharacter = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  const allCharacter = UpperCase + LowerCase + number + SpecialCharacter;
  let password = "";
  password += finalPassword(UpperCase);
  password += finalPassword(LowerCase);
  password += finalPassword(number);
  password += finalPassword(SpecialCharacter);
  for (let i = length - password.length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * allCharacter.length);
    password += allCharacter[randomIndex];
  }
  return ShuffleString(password);
};
const finalPassword = (str) => {
  const randomIndex = Math.floor(Math.random() * str.length);
  return str[randomIndex];
};
const ShuffleString = (str) => {
  let string = "";
  while (str.length > 0) {
    const randomIndex = Math.floor(Math.random() * str.length);
    string += str[randomIndex];
    str = str.slice(0, randomIndex) + str.slice(randomIndex + 1);
  }
  return string;
};
console.log(generateRandomPassword(10));