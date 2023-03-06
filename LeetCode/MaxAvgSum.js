// You are given an integer array nums consisting
// of n elements, and an integer k.

// Find a contiguous subarray whose length is
// equal to k that has the maximum average value
// and return this value. Any answer with a
// calculation error less than 10-5 will be accepted.

// SLIDING WINDOW PROBLEM

// RUNTIME: 93ms (82.3%)
// MEMORY: 54mb (88.9%)

var findMaxAverage = function (nums, k) {
  // calculate sum in first window:
  let sum = 0
  for (let i = 0; i < k; i++) {
    sum += nums[i]
  }
  let maxSum = sum

  for (let end = k; end < nums.length; end++) {
    // subtract old start num from sum, add new end num to sum
    sum = sum + nums[end] - nums[end - k]
    maxSum = Math.max(maxSum, sum)
  }
  return maxSum / k
}
