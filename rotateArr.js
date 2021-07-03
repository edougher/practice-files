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
  // if (nums.length > 50000) return null
  //   for (let i = k; i > 0; i--) {
  //       nums.unshift(nums[nums.length - 1])
  //       nums.pop()
  //   }


 // let first = nums.splice(nums.length - k, nums.length - 1)
  let first = nums.splice(0, nums.length - k)
  let second = nums
  nums.concat(first)
  

  console.log(nums); 
}
rotateRight(x, y);
/*
implement using reverse
1. Reverse whole array.
2. reverse the first k elements
3. reverse the rest.
*/

// !!!!!!!! Cant figure out
// function rotateWithReverse(nums, k) {
//   let first = nums.reverse().splice(0, k).reverse()
//   nums.reverse()
//   return nums
  
// }
//  console.log(rotateWithReverse(x, y))



/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space. 
*/