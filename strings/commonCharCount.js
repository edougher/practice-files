/*
Given two strings, find the number of common characters between them.  
*/

function commonCharacterCount(s1, s2) {
    let charCount1 = {}
    let charCount2 = {}
    let count = 0
    
    for (let i = 0; i < s1.length; i++){
        if(!charCount1[s1[i]]){
            charCount1[s1[i]] = 1
        } else {
            charCount1[s1[i]] ++
        }  
    }
    
    for (let j = 0; j < s2.length; j++){
        if(!charCount2[s2[j]]){
            charCount2[s2[j]] = 1
        } else {
            charCount2[s2[j]] ++
        }
    }
    
console.log(charCount1, charCount2)
return count
}

/*

s1: "aabcc"
s2: "adcaa"  
*/