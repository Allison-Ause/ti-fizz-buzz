// Given an integer array nums, move all 0's to the end of it while
// maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// ITERATE FROM BACK
// RUNTIME 76ms (99.24%)
// MEMORY 46.4mb (76.86%)
var moveZeroes = function (nums) {
  if (nums.length <= 1) return nums
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      const zero = nums.splice(i, 1)
      nums.push(zero[0])
    }
  }
}

// var moveZeroes = function(nums) {
//   for (let i = 0; i < nums.length; i++) {

//       if (nums[i] === 0) {
//           const zero = nums.splice(i, 1)
//           nums.push(zero[0])
//           console.log('nums:', nums)
//       }

//   }
// };
