// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true

// THIS WORKS BUT IS NOT OPTIMAL BECAUSE IT IS SLOW. OTHERS USE SORT()
// function containsDuplicate(nums) {
//   const solution = nums.filter((x, i) => nums.indexOf(x) !== i)
//   return solution.length >= 1 ? true : false
// }

// THIS TIMES OUT ON LARGE DATA SETS
// function containsDuplicate(nums) {
//   const hashMap = new Map()
//   for (let i = 0; i < nums.length; i++) {
//     if (hashMap.has(nums[i])) return true
//     hashMap.set(nums[i], i)
//   }
//   return false
// }

function containsDuplicate(nums) {
  const s = new Set(nums)
  return s.size !== nums.length
}

containsDuplicate([0, 4, 5, 0, 3, 6])

/// Hashmap version that WORKS
var containsDuplicate = function (nums) {
  const hashmap = new Map()
  for (let i = 0; i < nums.length; i++) {
    hashmap.set(nums[i], (hashmap.get(nums[i]) || 0) + 1)
    if (hashmap.get(nums[i]) > 1) return true
  }
  return false
}
