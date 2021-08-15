/*
given an array in ascending and a radius which coordinate will light the most points.

arr = [-5, 2, 3, 8, 12]

radius = 4

if two or more coordinates light the same ammout of points
return the least or lowest coodinate


*/
const arr = [-12, -3, -1, 12];
const rad = 1;
const findMaxLighting = (arr, rad) => {
  let hMap = {};

    for (let i = 0; i < arr.length; i++) {
    hMap[arr[i]] = true;
  }
  let min = arr[0];
  let max = arr[arr.length - 1];

  let num = 0;
  let tempCount = 0;
  let tempCoord;

  for (let i = min; i <= max; i++) {
      Object.keys(hMap).forEach((key) => {
        //console.log(typeof key);
      if (parseInt(key) <= i + rad && parseInt(key) >= i - rad) {
        tempCount += 1;
      }
    });
  
    if (tempCount > num) {
        num = tempCount;
        tempCoord = i
    }
    tempCount = 0
      
  }
  return tempCoord
};

console.log(findMaxLighting(arr, rad)); 
