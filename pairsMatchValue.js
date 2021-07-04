/*
Unique pairs of integers from array that equal a given number

array = [2, 6, 2, 6, 9, 1, 10, 3]
number = 12

pair = []
pairs = [[2, 10], [3, 9]]


*/

const pairs = (numbers, target) => {
    numbers.sort((a, b) => a-b)
    let i = 0
    let j = numbers.length - 1
    let y = []
    //console.log(numbers);
    while (i < j) {
        if (numbers[i] + numbers[j] === target) {
            let first = numbers[i]
            let last = numbers[j]
            let x = []

            x.push(first)
            x.push(last)
            y.push(x)
            
            i++
            j--

            
        } else if (numbers[i] + numbers[j] < target) {
            //console.log(numbers[i] + numbers[j]);
            i++
        } else {
            //console.log(numbers[i] + numbers[j]);
            j--
        }
    }
    console.log(y);
}
let nums = [2, 3, 4, 6, 1, 7, 10, 9]
let t = 12
pairs(nums, t)

/*
---- CHALLENGE ----
* alternative version of above challenge *
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.  
*/