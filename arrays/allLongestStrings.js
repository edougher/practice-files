/*
Given an array of strings, return another array containing all of its longest strings.

*/

function allLongestStrings(inputArray) {
  if (inputArray.length === 1) return inputArray;
  // Hold the long string in array

  // loop through array, and keep track of strings and their length in strObj
  // find array element that has longest length and find all others that have the same. Or just return the one.

  let strObj = {};

  for (let i = 0; i < inputArray.length; i++) {
    if (!strObj[inputArray[i]]) {
      strObj[inputArray[i]] = inputArray[i].length;
    }
  }

  let arr = Object.values(strObj);
    let maxLength = Math.max(...arr);
    let longestArr = inputArray.filter(str => str.length === maxLength)

    return inputArray.filter(str => str.length === maxLength)
}

/*
var obj = {a: 1, b: 2, c: 2},     keys = Object.keys(obj),     largest = Math.max.apply(null, keys.map(x => obj[x]))     result = keys.reduce((result, key) => { if (obj[key] === largest){ result.push(key); } return result; }, [])  
*/

inputArray = ["aba", "aa", "ad", "vcd", "aba"];

console.log(allLongestStrings(inputArray));
