
const arr = [4, 4, 8, 8, 8, 8 ,3, 3, 3]
//const arr = ["a", "a", "c", "e", "a", "t", "w", "y", "a", "g"]
const numOfPairs = (ar) => {
    let nums = {}
    // let nums = {sock: how manytimes it shows up}
	for(let x = 0; x < ar.length; x++) {
		let elem = ar[x]
		if (nums[elem]) {
			// elem already in nums
            nums[elem] += 1
		} else {
			// elem not in nums
            nums[elem] = 1
		}
	}
	
	let pairs = 0

	Object.keys(nums).forEach(key => {
		let value = nums[key]
		if (value > 1) {
			let count = nums[key] / 2
			console.log(`${key} has ${count} pairs`);
			pairs += count
		}
	})
	return Math.floor(pairs)
}



console.log(numOfPairs(arr)); 