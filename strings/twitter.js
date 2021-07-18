// function funWithAnagrams(text) {
//     for(let i=0; i < text.length; i++){
//         for (let j=text.length-1;j>i;j--){
//             let a = text[i].split("").sort().join("")
//             let b = text[j].split("").sort().join("")

//             a === b && text.splice(j, 1)
//         }
//     }
//     return text.sort();
// }
// let str = ["poke","pkoe","okpe","ekop"]
// console.log(funWithAnagrams(str));

function minSwaps(arr) {

 // keep track of zeroes for FIRST loop
 let count_1 = 0;
 let zeros_1 = 0;
 // loop starting from back
   for (let i = arr.length - 1; i >= 0; i--) {
   if (arr[i] === 0) {
     zeros_1 += 1;
   } else {
     count_1 += zeros_1;
   }
 }
   
 // keep track of zeroes for SECOND loop
 let count_2 = 0;
 let zeros_2 = 0;
   
 // start looping from front
 for (let j = 0; j < arr.length; j++) {
   if (arr[j] === 0) {
     zeros_2 += 1;
   } else {
     count_2 += zeros_2;
   }
 }
   // return which ever count is smaller
 //return count_1 < count_2 ? 'count_1' : 'count_2'
 return count_1
}
let y = [0, 0, 0, 1, 0, 1, 0];
//console.log(minSwaps(y));

function getCharMap(y) {
  // We define an empty object that will hold the key - value pairs.
  let charMap = {}

  /*We loop through each character in the string. if the character 
  already exists in the map, increase the value, otherwise add it 
  to the map with a value of 1 */
  for (let char of y) {
      charMap[char] = charMap[char] + 1 || 1
  }
  return charMap
}
console.log(getCharMap(y));