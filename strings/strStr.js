/*

Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

*/

const strStr = (haystack, needle) => {
  // -------- MY first attempt( doesnt pass the mississippi => issip test)
  // if(needle === "") return 0
  // let j = 0
  // let str = ""

  // for (let i = 0; i < haystack.length; i++){
  //     if (haystack[i] === needle[j] && haystack[i + needle.length - 1] === needle[needle.length - 1]) {
  //         j++
  //         str += haystack[i]
  //     }
  // }

  // console.log(str);
  // if (str === needle) {
  //     return haystack.indexOf(needle[0])
  // } else {
  //     return -1
  // }
  // ---------- Second (working solution, found online)
  // let nIndex = 0;
  // for(let i=0; i<haystack.length; i++){

  //     if(haystack[i] === needle[nIndex]) {
  //         //console.log(haystack[i], needle[nIndex]);
  //         if(nIndex === (needle.length -1)) {
  //             console.log(nIndex, needle.length - 1);
  //             return (i-nIndex);

  //         } else {
  //             nIndex++;
  //         }
  //     } else if(nIndex > 0) {
  //         i = i - nIndex;
  //         nIndex = 0;
  //     }
  // }

  // ----- two loop approach
  let firstIndex = [];
  for (let i = 0; i < haystack.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] != needle[j]) break;
      if (j + 1 === needle.length) return i;
    }
  }
  return -1
};
console.log(strStr("mississippi", "issip"));
/*
"mississippi"
"issip"
*/
