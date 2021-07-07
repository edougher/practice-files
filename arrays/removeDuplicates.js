/*
------ CHALLENGE -------
remove duplicate from array and relace with underscore  
*/
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] != nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

const n = [1, 2, 3, 3];
//console.log(removeDuplicates(n));

/*
------ CHALLENGE -------
Given an integer array nums, return true if any value appears at 
least twice in the array, and return false if every element is distinct.  
*/

function containsDuplicate(arr) {
  let dupe = false;
  let x = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = x; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        dupe = true;
      }
    }
    x++;
  }
  return dupe;
}
//console.log(containsDuplicate(n));

/*
------ CHALLENGE -------  
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.
*/

let g = [0, 1, 3, 0, 4, 2];

function moveZeros(nums) {
  for (let i of nums) {
    if (i === 0) {
      nums.splice(nums.indexOf(i), 1);
      nums.push(0)
    }
  }
  return nums
}
console.log(moveZeros(g)); 