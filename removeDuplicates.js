// var removeDuplicates = function (nums) {
//   if (nums.length === 0) return 0;
//   let i = 0;
//   for (let j = 1; j < nums.length; j++) {
//       if (nums[j] != nums[i]) {
//         console.log(nums[i], nums[j]);
//       i++;
//       nums[i] = nums[j];
//     }
//   }
//     console.log(nums.length);
//   return i + 1;
// };

const n = [1, 1, 1, 2, 2, 3, 3, 3, 4, 5, 6, 6, 6, 7];



const removeDuplicates=nums=>{
    const rt=[...new Set(nums)]
    for(let i=0;i<rt.length;i++){
      nums[i]=rt[i]
    }
    console.log(rt);
    return rt.length
}
  
console.log(removeDuplicates(n));