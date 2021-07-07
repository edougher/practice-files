/*
-The Knapsack Problem
You got a list of item, where every item has a value and a weight.
You got a bag that holds a maximum weight of X. 
Write a program that maximizes the value of the items you put in the 
bag whilst ensuring that you do not exceed the max weight.
*/


//items = [
//    {id: 'a', val: 10, w: 3},
//    {id: 'b', val: 6, w: 8},
//    {id: 'c', val: 3, w: 3}
//]
//maxWeight = 8//

//// solution = ['a', 'c']//

//items.map(i => {//

//})


/*
---------------------------------------------------------------  
*/

// sum of all numbers in an array
const nums = [1, 2, 3, 4]
// for 'of' loop
function sumOfNumbers(numbers){
    let result = 0
    for(const number of numbers){
        result += number
    }

    return result
}
console.log(sumOfNumbers(nums)); 

// reduce method
nums.reduce((sum, currentNumber) => sum + currentNumber, 0)
// same as above (0 is initial value)
nums.reduce((sum, currentNumber) => {
    return sum + currentNumber
}, 0)
