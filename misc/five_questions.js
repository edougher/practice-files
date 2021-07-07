/*
How to append to array?
How to prepend to array?
*/

let arr = ["a", "b", "c"]
//Append
arr.push("End")
arr.unshift("Start")

console.log(arr);


// Same thing but in ES6 using ...spread

let arrs = ["Start-ES6", ...arr, "End-ES6"]

console.log(arrs);

