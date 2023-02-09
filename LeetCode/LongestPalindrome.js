// Given a string s which consists of
// lowercase or uppercase letters,
// return the length of the longest palindrome
// that can be built with those letters.

// Letters are case sensitive, for example, "Aa"
// is not considered a palindrome here.

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

// HASHMAP WITH ODD LOGIC
// RUNTIME 70ms (72.48%)
// MEMORY 42.6mb (86.42%)
var longestPalindrome = function (s) {
  if (s.length === 1) return 1
  const hashmap = new Map()

  for (let i = 0; i < s.length; i++) {
    hashmap.set(s[i], (hashmap.get(s[i]) || 0) + 1)
  }

  // sum all even numbers
  // if number is odd, add all but one
  // add one for center pivot
  let palindromeLength = 0
  let hasOdd = false
  for (key of hashmap.keys()) {
    if (hashmap.get(key) % 2 === 0) {
      palindromeLength += hashmap.get(key)
    } else if (hashmap.get(key) != 0) {
      palindromeLength += hashmap.get(key) - 1
      hasOdd = true
    }
  }
  // conditional logic for an all even setup
  return hasOdd ? palindromeLength + 1 : palindromeLength
}
