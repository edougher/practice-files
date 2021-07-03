/*
Find element that only appears once  
*/

let x = [4,1,2,1,2]

var singleNumber = function (nums) {
    let numObj = {}
    let single;
    
    for (let i = 0; i < nums.length; i++){
        let value = nums[i]
        if (numObj[value]) {
            numObj[value] += 1
        } else {
            numObj[value] = 1
        }
    }

    Object.keys(numObj).forEach(key => {
        if (numObj[key] === 1) {
          single = key
      }
    })
    return single
};

console.log(singleNumber(x));

/*

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

*/

