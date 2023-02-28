// A phrase is a palindrome if, after
// converting all uppercase letters into lowercase letters
// and removing all non-alphanumeric characters, it
// reads the same forward and backward. Alphanumeric
// characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

var isPalindrome = function (s) {
  // remove all erroneous things
  const alphas = s.replace(/[^a-zA-Z0-9]/g, '')
  if (alphas.length <= 1) return true
  for (let left = 0, right = alphas.length - 1; left < right; left++) {
    if (alphas[left].toLowerCase() != alphas[right].toLowerCase()) {
      return false
    } else {
      right--
    }
  }
  return true
}
