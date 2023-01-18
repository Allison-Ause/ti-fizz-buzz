// Given an array of integers nums, sort the array in increasing order
// based on the frequency of the values. If multiple values have the same frequency,
// sort them in decreasing order.

// Return the sorted array.

// Example 1:

// Input: nums = [1,1,2,2,2,3]
// Output: [3,1,1,2,2,2]
// Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.

var frequencySort = function (nums) {
  let hashmap = new Map()

  // calculate frequency for each number
  for (let i = 0; i < nums.length; i++) {
    hashmap.set(nums[i], (hashmap.get(nums[i]) || 0) + 1)
  }

  return nums.sort((a, b) => {
    if (hashmap.get(a) === hashmap.get(b)) {
      return b - a
    }
    return hashmap.get(a) - hashmap.get(b)
  })
}

frequencySort([1, 4, 1, 2, 1, 2, 3, 3])
