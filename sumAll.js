/*
----Sum all numbers in a range
  ----   ex: [1,3] returns 6 because ==> 1 + 2 + 3 = 6
*/

function sumAll(arr) {
    let max, min
    let sum = 0;
    if (arr[0] > arr[1]){
      max = arr[0]
      min = arr[1]
    } else {
      max = arr[1]
      min = arr[0]
    }
    for (let i = min; i < max + 1; i++){
        sum += i
        console.log(sum);
    }
    return sum;
}
  
//console.log(sumAll([1, 9])); 

