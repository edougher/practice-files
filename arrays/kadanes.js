/*
 --- Kadane's Algorithm ---

1. According to Kadane, the largest sum is either the current element, or the 
sum of the current element and the previous largest sum.

given an array of integers, return the maximum sum of a subarray of the array.
A 'subarray' is contiguous, and can include just one integer, OR ALL OF THEM.
    
*/

let a = [2, 1, -2, 3, 2, 1, 5, -4, -4]
//solution is 6 which is the
function maxSubArr(arr) {
    //let currentEl = arr[1]
    let currentMax = arr[0] // 6
    let globalMax = arr[0] // 6
    for (let i = 1; i < arr.length; i++){
        currentMax = Math.max(arr[i], currentMax + arr[i])
        if (currentMax > globalMax) {
            globalMax = currentMax
        }
    }
    return globalMax
}

console.log(maxSubArr(a));