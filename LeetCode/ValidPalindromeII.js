// Given a string s, return true
// if the s can be palindrome after
// deleting at most one character from it.

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.

// RUNTIME 84ms (70.95%)
// MEMORY 47.5mb (95.27%)
var validPalindrome = function (s) {
  // iterate from front and back, checking for matching
  // if match: proceed; if no match, check next char for match
  // if then match, proceed

  for (let left = 0, right = s.length - 1; left < right; ) {
    // if left and right match, continue
    if (s[left] === s[right]) {
      left++
      right--
    } else
      return (
        isValidPalindrome(s.slice(left + 1, right + 1)) ||
        isValidPalindrome(s.slice(left, right))
      )
  }
  return true
}

var isValidPalindrome = function (s) {
  // const reversed = s.split('').reverse().join('');
  // return s === reversed;
  let left = 0
  let right = s.length - 1
  while (left < right) {
    if (s[left] === s[right]) {
      left++
      right--
    } else return false
  }
  return true
}

// THIS ONE WAS SLOW AS HELL AND ATE UP A BUNCH OF MEMORY

// let alreadyOne = false;
// let check = ''
// for (let left = 0, right = s.length - 1; left < right;) {
//     console.log('left, right:', s[left], s[right], alreadyOne)
//     // if left and right match, continue
//     if (s[left] === s[right]) {
//         left++;
//         right--;
//     } else {
//     // if left and right don't match, check next character for match
//         if (s[left] === s[right - 1] && !alreadyOne) {
//             check = s.slice(left, right - 1);
//             console.log('check:', check)
//             isValidPalindrome(check)
//             console.log('jumped two right')
//             left++;
//             right -= 2;
//             alreadyOne = true;
//         } else if (s[left + 1] === s[right] && !alreadyOne) {
//             check = s.slice(left + 1, right)
//             console.log('check:', check)
//             isValidPalindrome(check)
//             console.log('jumped two left')
//             left += 2;
//             right--;
//             alreadyOne = true;
//         } else return false;
//     }
// }
// return true;
// };

// var isValidPalindrome = function(s) {
//     const reversed = s.split('').reverse().join();
//     console.log('reversed:', reversed)
//     return s === reversed;
// }
