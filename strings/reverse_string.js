/*
 function reverseWithMethods(string){
     let splitString = string.split("");
     let reversedString = splitString.reverse()
     let joinString = reversedString.join("")
     let splitString = string.split("").reverse().join("");
     console.log(splitString);
  }

  reverseWithMethods('Hello')
  */



//with methods
function reverseString(str) {
  const reversedStr = str.split("").reverse().join("");
  return reversedStr;
}
console.log(reverseString("Hello"));


// without methods, solution I came up with
function reverseStringWithoutMethods(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
console.log(reverseStringWithoutMethods("Hello"));
