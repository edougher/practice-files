/*
Given an array of intervals( and array on two integers with a beginning and ending in ascending order, ex: [[1,3],[4,9],[8,12]] merge any OVERLAPPING arrays then return all non-overlapping intervals ex: [[1,3],[4,12]])

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].


*/


const overlappingInt = (ints) => {
    for (let i = 0; i < ints.length - 1; i++) {
        let temp = []
        if (ints[i][1] < ints[i + 1][0]) {
            temp.push(ints[i][1], ints[i + 1][0])
            
        }
        
    }
    console.log(ints);
}
let intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]

overlappingInt(intervals)