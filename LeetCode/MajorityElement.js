// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3

// THIS TIMES OUT ON A SUPER LARGE DATA SET
var majorityElement = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const distilled = nums.filter((x) => x === nums[i])
    if (distilled.length > nums.length / 2) return distilled[0]
  }
}

//
var majorityElement = function (nums) {
  const hashmap = new Map()
  for (let i = 0; i < nums.length; i++) {
    hashmap.set(nums[i], (hashmap.get(nums[i]) || 0) + 1)
    if (hashmap.get(nums[i]) > nums.length / 2) {
      return nums[i]
    }
  }
}
