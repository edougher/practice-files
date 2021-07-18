/*
---- Challenge -----
Unique pairs of integers from array that equal a given number

array = [2, 6, 2, 6, 9, 1, 10, 3]
number = 12

pair = []
pairs = [[2, 10], [3, 9]]


*/
// find more than one pair that adds up to target
const pairs = (numbers, target) => {
  numbers.sort((a, b) => a - b);
  let i = 0;
  let j = numbers.length - 1;
  let y = [];
  //console.log(numbers);
  while (i < j) {
    if (numbers[i] + numbers[j] === target) {
      let first = numbers[i];
      let last = numbers[j];
      let x = [];

      x.push(first);
      x.push(last);
      y.push(x);

      i++;
      j--;
    } else if (numbers[i] + numbers[j] < target) {
      //console.log(numbers[i] + numbers[j]);
      i++;
    } else {
      //console.log(numbers[i] + numbers[j]);
      j--;
    }
  }
  return y;
};

//console.log(pairs(nums, t));

/*
---- CHALLENGE ----
* alternative version of above challenge *
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.  
*/

const nextPairs = (numbers, target) => {
  numbers.sort((a, b) => a - b);
  let i = 0;
  let j = numbers.length - 1;
  let y = [];
  //console.log(numbers);
  while (i < j) {
    if (numbers[i] + numbers[j] === target) {
      y.push(i);
      y.push(j);

      i++;
      j--;
    } else if (numbers[i] + numbers[j] < target) {
      //console.log(numbers[i] + numbers[j]);
      i++;
    } else {
      //console.log(numbers[i] + numbers[j]);
      j--;
    }
  }
  return y;
};

//console.log(nextPairs(nums, t));


/*
    -- Hash Map solution
*/

var twoSumHashMap = function(nums, target) {
  let hash = {};
  // target = 12 | 10
  // nums = [2, 3, 4, 6, 1, 7, 10, 9]

  for (let i = 0; i < nums.length; i++) {
    // n stores value of current index
    const n = nums[i];
   console.log(hash[target - n]); 
    if(hash[target - n] !== undefined) {
      return [hash[target - n], i];
    }
    hash[n] = i;
  }
  return [];
}

let nums = [2, 3, 4, 6, 1, 7, 10, 9];
let t = 12;

console.log(twoSumHashMap(nums, t));