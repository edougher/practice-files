function mostRepeated(arr){
	let nums = {}
	for(let x = 0; x < arr.length; x++) {
		let elem = arr[x]
		if (nums[elem]) {
			// elem already in nums
			nums[elem] += 1
		} else {
			// elem not in nums
			nums[elem] = 1
		}
	}

	let maxValue = 0
	let maxKey

	Object.keys(nums).forEach(key => {
		let value = nums[key]
		if (value > maxValue) {
			maxValue = value
			maxKey = key
		}
	})

	return maxKey
}


const arr = [4, 4, 8, 8, 8, 3, 3]
//const arr = ["a", "a", "c", "e", "a", "t", "w", "y", "a", "g"]
const numOfPairs = (ar) => {
    let nums = {}
    // let nums = {sock: how manytimes it shows up}
    let pairs = []
	for(let x = 0; x < ar.length; x++) {
		let elem = ar[x]
		if (nums[elem]) {
			// elem already in nums
            nums[elem] += 1
            pairs.push(arr[x])
		} else {
			// elem not in nums
            nums[elem] = 1
		}
    }
    return pairs
}



console.log(numOfPairs(arr)); 