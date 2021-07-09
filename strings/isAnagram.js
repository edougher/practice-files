/*
----- Leetcode soulution for:
    Given two strings s and t, return true if t is an anagram of s, and false otherwise.
    ex: 
    s = "anagram", t = "nagaram"
    true

    s = "rat", t = "car"
    false

    HINT:
    What about 

*/
let s = "anagram";
let t = "nagaram";
anagram = (s, t) => {
  let sArr = s.split("").sort().join('');
  let tArr = t.split("").sort().join('');
    
    return (sArr === tArr)


  
};

//console.log(anagram(s, t));



 /// **** way faster
function anagramTwo(s, t){
 let dict = {};
  for (c of s) {
    dict[c] = (dict[c] || 0) + 1;
  }
  console.log(dict);
  for (c of t) {
    console.log(c);
    if (!dict[c]) return false;
    else dict[c]--;
    // if (dict[c] < 0) return false;
  }
  console.log(dict);
  //return Object.values(dict).every((val) => val === 0); 
}
console.log(anagramTwo(t, s)); 