// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// BRUTE FORCE
// Runtime 54.23%
// Memory 45.3%
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j]
    }
  }
  return null
}

// HASHMAP SOLUTION
// Runtime 81.27% (78ms)
// Memory 23.63% (43.5mb)

// Make the index the value and the key be the number, since we want easy access to the index
var twoSum = function (nums, target) {
  let numsMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    const pairedIndex = target - nums[i]
    if (numsMap.has(pairedIndex)) {
      return [i, numsMap.get(pairedIndex)]
    }
    numsMap.set(nums[i], i)
  }
  return console.log('No solution could be found.')
}
