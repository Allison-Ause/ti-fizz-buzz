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

var longestPalindrome = function (s) {
  if (s.length === 1) return s.length
  const hashmap = new Map()
  // don't have to split string to iterate over
  const letters = s.split('')
  for (let i = 0; i < letters.length; i++) {
    hashmap.set(letters[i], hashmap.get(letters[i]) + 1 || 1)
  }
  let palindromeLength = 0
  const mapIter = hashmap.entries()
  console.log('mapIter:', mapIter)

  // sum all even numbers
  // if number is odd, add all but one
  // add one for center pivot
  for (key of hashmap.keys()) {
    if (hashmap.get(key) % 2) {
      palindromeLength += hashmap.get(key)
      console.log('palindromeLength:', palindromeLength)
    } else if (hashmap.get(key) > 1) {
      palindromeLength += hashmap.get(key) - 1
      console.log('palindromeLength:', palindromeLength)
    }
  }
  // conditional logic for an all even setup
  return palindromeLength + 1
}

// var longestPalindrome = function(s) {
//   if (s.length === 1) return s.length
//   const hashmap = new Map()
//   const letters = s.split('')
//   for (let i = 0; i < letters.length; i++) {
//       hashmap.set(letters[i], hashmap.get(letters[i]) + 1 || 1)
//   }
//   let palindromeLength = 0
//   for (key in hashmap) {
//       if (hashmap.get(key) % 2) {
//           palindromeLength += hashmap.get(key)
//           console.log('palindromeLength:', palindromeLength)
//       } else if (hashmap.get(key) > 1) {
//           palindromeLength += hashmap.get(key) - 1
//           console.log('palindromeLength:', palindromeLength)
//       }
//   }
//   return palindromeLength
//   // sum all even numbers, add highest odd?
//   // if number is odd, add all but one
// };
