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

// USING OBJECTS AND COUNTING PAIRS
// RUNTIME 70ms (72.48%)
// MEMORY 44.4mb (24.8%)

// var longestPalindrome = function(s) {
//   if (s.length === 1) return 1

//   // create the counts
//   const counts = {}
//   for (const letter of s) {
//       if (counts.hasOwnProperty(letter)) {
//           counts[letter]++
//       } else {
//           counts[letter] = 1
//       }
//   }
//   // add each pair to the length count
//   // if the count is less than the length, you have an odd and must add one
//   let pairs = 0
//   for (const tally of Object.values(counts)) {
//       pairs += Math.floor(tally / 2)
//   }
//   const length = pairs * 2
//   return length < s.length ? length + 1 : length
// };

// SET SOLUTION
// RUNTIME 234ms (5.37%)
// MEMORY 50.3mb (5.41%)

// var longestPalindrome = function(s) {
//   if (s.length === 1) return 1

//   // create new storage set
//   const set = new Set()
//   let count = 0
//   // add to set, remove as pairs
//   for (let i = 0; i < s.length; i++) {
//       if (set.has(s[i])) {
//           count += 2
//           set.delete(s[i])
//           console.log('set:', set)
//       } else {
//           set.add(s[i])
//       }
//   }
//   // if only pairs, no need to add; if there's a loner, add 1 to count
//   return set.size === 0 ? count : count + 1
// };
