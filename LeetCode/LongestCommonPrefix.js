// Write a function to find the longest common prefix
// string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

var longestCommonPrefix = function (strs) {
  let inCommon = ''
  for (let j = 0; j < strs[0].length; ) {
    // save the first word, iterate through letters
    let letter = strs[0][j]
    // .every iterates through array and returned boolean
    if (strs.every((word) => word[j] === letter)) {
      // if every word has that letter at the same index, store it
      inCommon += strs[0][j]
      j++
    } else {
      // if it doesn't match, we've discovered our longest prefix
      break
    }
  }
  return inCommon
}
