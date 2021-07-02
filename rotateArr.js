/*
  Given an array, rotate the array to the right by k steps, where k is non-negative.

  ex:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

pop() removes last element
unshift() Add new items to the beginning of an array:

*/



let x = [1, 2, 3, 4, 5, 6, 7]
let y = 3

function rotateRight(nums, k) {
    for (let i = k; i > 0; i--) {
        let last = nums[nums.length - 1]
        nums.unshift(last)
        nums.pop()
    }
  return nums   
}



console.log(rotateRight(x, y));


/*
contains duplicate function.
does an array contain a duplicate: boolean  
*/