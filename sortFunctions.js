// /*
// ----- Quick Sort ------
// */
// function quickSort(arr) {
//   if (arr.length === 1) {
//     return arr;
//   }
//   const pivot = arr[arr.length - 1];
//   let left = [];
//   let right = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//       console.log(left);
//     } else {
//       right.push(arr[i]);
//       console.log(right);
//     }
//   }

//   /* Alternative for-loop for the one above.
//   for (const element of arr.slice(0, array.length -1)){
//   }
//   */
//   console.log(right, left);
//   if (left.length > 0 && right.length > 0) {
//     return [...quickSort(left), pivot, ...quickSort(right)];
//   } else if (left.length > 0) {
//     return [...quickSort(left), pivot];
//   } else {
//     return [pivot, ...quickSort(right)];
//   }

//   return array;

// }
//console.log(quickSort(x));

/*
--- Merge Sort ---  
      Below
*/

// Helper function that merges two sorted arrays
// ex: [9, 12] and [3, 6]  -> [3, 6, 9, 12]

// const merge = (leftArr, rightArr) => {
//   const output = [];
//   let leftIndex = 0;
//   let rightIndex = 0;

//   while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
//     const leftEl = leftArr[leftIndex];
//     const rightEl = rightArr[rightIndex];

//     if (leftEl < rightEl) {
//       output.push(leftEl);
//       leftIndex++;
//     } else {
//       output.push(rightEl);
//       rightIndex++;
//     }
//   }
//   return [
//     ...output,
//     ...leftArr.slice(leftIndex),
//     ...rightArr.slice(rightIndex),
//   ];
// }

// // Recursive
// const mergeSort = (arr) => {
//   if (arr.length < 1) {
//     return arr;
//   }
//   const middleIndex = Math.floor(arr.length / 2);
//   console.log(middleIndex);
//   const left = arr.slice(0, middleIndex);
//   const right = arr.slice(middleIndex, arr.length);
//   console.log(left);
//   return merge(mergeSort(left), mergeSort(right));
// }
// let x = [1, 4, 2, 8, 345, 123, 43, 32, 56, 63, 123, 43, 2, 55, 1, 234, 92];
// console.log(mergeSort(x));

// ----- find difference of elements of two arrays
// 




