// Given a non-empty array of integers nums,
// every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity
// and use only constant extra space.

// Example 1:

// Input: nums = [2,2,1]
// Output: 1

// SORT THEN SKIP PAIRS
// RUNTIME 89ms (49.1%)
// MEMORY 44.3mb (66.18%)
var singleNumber = function (nums) {
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      i++
    } else {
      return nums[i]
    }
  }
}

// COULD USE XOR OPERATOR INSTEAD
// RUNTIME 74ms (75.4%)
// MEMORY 44.7mb (60.47%)

var singleNumber = function (nums) {
  let xor = 0
  for (const n of nums) {
    xor ^= n
  }
  return xor
}
