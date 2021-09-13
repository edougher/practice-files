function matrixElementSum(matrix) {
//keep track of total cost/ints of inner arrays
let total = 0
// if a certain index contains 0 then all the indexs below will be "haunted"
let indexObj = {}

for(let i = 0; i < matrix.length; i++){
    
    for (let j = 0; j < matrix[i].length; j++){
        let val = matrix[i][j]
        if (indexObj.hasOwnProperty(j)) {
            continue;
        } else {
            if (val === 0) {
                indexObj[j] = true
            } else {
                total += val
            }
            
        }

    }
    
}
return total
}
let matrix = [[0,1,1,2], 
 [0,5,0,0], 
 [2,0,3,3]]
matrixElementSum(matrix)

//answer is nine