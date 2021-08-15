/*
takes an array of unique non-negative numbers. Return int that represents the number of missing ints need to make array Ints ascending and consecutive

statues = [6, 2, 3, 8]
returns = 3

missing nums are 4, 5, and 7 (needed to fill in gaps from 2 - 8 in array above.)



*/

const makeArrayConsecutive = (statues) => {

    function makeArrayConsecutive2(statues) {
        // [6, 2, 3, 8]
        
        const arrSorted = [...statues.sort((a,b) => a - b)]
        // [2, 3, 6, 8]
        // x = lowest int in array and is at index [0]
        let x = arrSorted[0] // 2
        // y = greatest int in array at index [length - 1]
        let y = arrSorted[arrSorted.length - 1] // 8
        
        // number of elements between the values = length - 2    (length of array minus first and last index)
        let numOfElementsInBetween = arrSorted.length - 2 // 2
        
        // number of elements that SHOULD be between values 
        let missingElements = y - x - 1 // 5
        
        let elementsNeeded = missingElements - numOfElementsInBetween
        
        return elementsNeeded
    }
    
}