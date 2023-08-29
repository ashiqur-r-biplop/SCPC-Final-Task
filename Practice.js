function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "plese provide me a validate string";
  } else if (string1.indexOf(string2) !== -1) {
    return true;
  } else {
    return false;
  }
}
console.log(matchFinder("john Doe", "ohn")); //(output --true)
console.log(matchFinder("javaScrip", "code")); //(output --false)


