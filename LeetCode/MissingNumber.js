// Given an array nums containing n distinct numbers in the range [0, n],
// return the only number in the range that is missing from the array.

// Example 1:

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers,
// so all numbers are in the range [0,3]. 2 is the missing number in the range
// since it does not appear in nums.

// Example 2:

// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers,
// so all numbers are in the range [0,2]. 2 is the missing number
// in the range since it does not appear in nums.

var missingNumber = function (nums) {
  const n = nums.length
  const sorted = nums.sort((a, b) => a - b)
  if (sorted[0] !== 0) return 0
  if (sorted[sorted.length - 1] !== n) return n

  for (let i = 0; i < nums.length; i++) {
    if (i !== sorted[i]) return i
  }

  // nums.length is top of range. n + 1 is not in range
  // sort then check if i+1 = nums[i] + 1
  // return missing number
}
