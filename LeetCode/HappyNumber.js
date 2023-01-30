// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

/**
 * @param {number} n
 * @return {boolean}
 */

// positiveInt = split into single digits, square them, add them
// repeat until positiveInt = 1
// loops endlessly = false
// n is 1 = true

// RECURSIVE VERSION NOT WORKING; RESETTING VALUES TO ZERO IS PROBLEM
// var isHappy = function(n) {
//   let result = 0
//   const set = new Set()
//   console.log('set:', set)
//   let digits = n.toString().split('')

//   for(let i = 0; i < digits.length; i++) {
//       result += Math.pow(digits[i], 2)
//   }
//   console.log('result:', result)
//   if(Number(result) === 1) {
//       return true
//   } else {
//       if (set.has(result)) {
//           return false
//       }
//       set.add(result)
//       console.log('entering else')
//       isHappy(result)
//   }
// };

// SECONDARY FUNCTION VERSION
// var runSquare = function (digits) {
//     console.log('digits in micro:', digits)
//     let result = 0
//     for(let i = 0; i < digits.length; i++) {
//         result += Math.pow(digits[i], 2)
//         console.log('result in micro:', result)
//     }
//     return result
// }

// var isHappy = function(n) {
//     let digits = n.toString().split('')
//     let result = runSquare(digits)
//         if(result == 1) {
//             return true
//     } else {
//         digits = result.toString().split('')
//         console.log('digits in else:', digits)
//         runSquare(digits)
//     }
//     return false
// };
