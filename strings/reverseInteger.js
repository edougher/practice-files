/*

Given a signed 32-bit integer x, return x with its digits reversed.
If reversing x causes the value to go outside the signed 32-bit integer
range [-231, 231 - 1], then return 0.

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21

Example 4:
Input: x = 0
Output: 0
*/
//  parseInt() or Number(str)

const num = 4320;


reverseInteger = (num) => {
    if (x === 0 || x >= 2147483647 || x < -2147483647) return 0
    
    let numString = num.toString()
    let pivot = numString.length / 2;
    let j = num.toString().length - 1;
    let newString = []
    
    for (let i = numString.length - 1; i >= 0; i--){
        
        newString.push(numString[i])
    }

    if (newString[newString.length - 1] === '-') {
        newString.unshift('-')
        newString.pop()

    } else if (newString[0] === '0') {
        newString.shift()
    }

    if (Number(newString.join('')) > 2147483647 || Number(newString.join('')) < -2147483647) return 0

    return(Number(newString.join('')));

};

reverseInteger(num);
