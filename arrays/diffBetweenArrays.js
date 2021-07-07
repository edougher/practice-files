/*
---- Find difference  between two arrays,
---- ex: a=[1, 2, 3] b=[1, 2, 3, 4, 5] 
---- returns [4, 5]
*/

function arr_diff(a1, a2) {
    var a = [],
      diff = [];
  
    for (var i = 0; i < a1.length; i++) {
      a[a1[i]] = true;
    }
  
    for (var i = 0; i < a2.length; i++) {
      if (a[a2[i]]) {
        delete a[a2[i]];
      } else {
        a[a2[i]] = true;
      }
    }
  
    for (var k in a) {
      diff.push(k);
    }
  
    return diff;
}
  
let a = [1, 2, 3, 4, 5, 6],
  b = [1, 2, 5, 6];
//console.log(arr_diff(b, a));