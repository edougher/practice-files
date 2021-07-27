const countSay = (n) => {
    if (n <= 1) return "1"
    
    // "1" is alsways the starting point
    let res = "1"
    while (n > 1) {
        let currStr = ""
        for (let i = 0; i < res.length; i++){
            // since "1" is the starting point the count will always start at 1
            let count = 1
            // first make sure this stays within bounds less than i + 1
            // then each time i is same as next element increase COUNT by 1
            while (i + 1 < res.length && res[i] === res[i + 1]) {
                count++
                i++
            }

            currStr += (count) // count
            currStr+=(res[i]) // say
        }
        res = currStr
        n--
    }
    return res
}
console.log(countSay(6));

/*
The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

countAndSay(1) = "1"
countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
To determine how you "say" a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character. Then for each group, say the number of characters, then say the character. To convert the saying into a digit string, replace the counts with a number and concatenate every saying.

For example, the saying and conversion for digit string "3322251":


Given a positive integer n, return the nth term of the count-and-say sequence.  
*/