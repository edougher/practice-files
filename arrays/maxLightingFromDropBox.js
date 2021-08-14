/*
given an array in ascending and a radius which coordinate will light the most points.

arr = [-5, 2, 3, 8, 12]

radius = 4

if two or more coordinates light the same ammout of points
return the least or lowest coodinate


*/
const arr = [-5, -1, 3, 8, 12]
const rad = 4
const findMaxLighting = (arr, rad) => {
    let hMap = {}

    for (let i = 0; i < arr.length; i++){
        hMap[arr[i]] = true

    }
    let min = arr[0]
    let max = arr[arr.length - 1]
    console.log(min, max);
}

findMaxLighting(arr,rad)