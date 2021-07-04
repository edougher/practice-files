const x = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

function quickSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  if (left.length > 0 && right.length > 0) {
    return [...quickSort(left), pivot, ...quickSort(right)]
  } else if (left.length > 0) {
    return [...quickSort(left), pivot]    
  } else {
    return [pivot, ...quickSort(right)]

  }

  return array;
  // Only change code above this line
}
console.log(quickSort(x));
