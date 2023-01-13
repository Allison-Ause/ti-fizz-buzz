// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

function findMissing(nums) {
  // for loop through array, while loop for swapping places
  // second for loop to return missing nums

  for (let i = 0; i < nums.length; i++) {
    // while the current number doesn't equal index + 1 (which it -should-) AND
    // the current number doesn't match the number in the place where it SHOULD go (index - 1)
    while (nums[i] != i + 1 && nums[i] != nums[nums[i] - 1]) {
      let currentNum = nums[i]
      // swap the two places
      nums[i] = nums[currentNum - 1]
      nums[currentNum - 1] = currentNum
    }

    const missingNums = []
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] != i + 1) {
        missingNums.push(i + 1)
      }
    }
  }
  return missingNums
}

// var findDisappearedNumbers = function(nums) {
//   const missingNums = []
//   const sortedNums = nums.sort((a, b) => a - b)
//   const map = new Set(sortedNums)
//   console.log('map:', map)
//   for (let i = 1; i <= nums.length; i++) {
//       if (!map.has(i)) missingNums.push(i)
//   }
//   return missingNums

// };
