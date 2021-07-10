/*

Given a string s, find the first non-repeating character in it and
return its index. If it does not exist, return -1.

ex:
Input: s = "leetcode"
Output: 0

0 = index of "l" which is first letter that doesnt repeat
*/

var firstUniqChar = function(s) {
    let chars = {}
    let singleChars = []

    for (let i = 0; i < s.length; i++){
        if (!chars[s[i]]) {
            chars[s[i]] = 1
        } else {
            chars[s[i]]++
        }
    }

    Object.keys(chars).forEach(key => {
        if (chars[key] === 1) {
            singleChars.push(key)
        } 
    })
    return s.indexOf(singleChars[0])
};

let s = 'eettccduu'
console.log(firstUniqChar(s));