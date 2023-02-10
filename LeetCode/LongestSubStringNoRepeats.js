// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// FIRST ATTEMPT WITH NESTED LOGIC; DIDN'T PASS 'au' TESTS

// var lengthOfLongestSubstring = function(s) {
//   if (s.length < 2) return s.length

//   let substring = 0
//   let count = 0
//   let map = new Map()

//   for (let i = 0; i < s.length; i++) {
//       // if this letter does not match its neighbor, check if we've seen it earlier
//       if (s[i] != s[i + 1]) {
//           // if we have seen it already, reset the system
//           if (map.has(s[i])) {
//               // if map already has it we have a repeat
//               // take stock of longest substring
//                   if (count > substring) {
//                       substring = count
//                   }
//               // reset system
//               map = new Map()
//               count = 0
//           } else {
//               // if it's not in the map then we have not seen it yet: add it to map and increase count
//               map.set(s[i], 1)
//               count++
//           }
//       }  else {
//           // if it equals its neighbor, we have a repeat
//           count++
//           if (count > substring) {
//               substring = count
//           }
//           map = new Map()
//           count = 0
//       }
//   }
//   return substring
// };
