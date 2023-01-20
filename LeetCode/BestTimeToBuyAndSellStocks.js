// You are given an array prices where prices[i] is the price of a
// given stock on the ith day.

// You want to maximize your profit by choosing a single day to
// buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction.
//  If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not
// allowed because you must buy before you sell.

// WHILE LOOP Runtime 74ms (98.87%), Memory 51.8 (53.85%)
var maxProfit = function (prices) {
  let leftI = 0 // buy stock low
  let rightI = 1 // sell stock high
  let maxProfit = 0
  while (rightI < prices.length) {
    if (prices[leftI] < prices[rightI]) {
      // buy day comes first, sell day follows
      let currentProfit = prices[rightI] - prices[leftI]
      maxProfit = Math.max(maxProfit, currentProfit)
    } else {
      leftI = rightI // if this is leftI++ it doesn't work
    }
    rightI++
  }
  return maxProfit
}

// USING CONDITIONAL INSTEAD OF MATH.MAX MAKES MEMORY MUCH BETTER
var maxProfit = function (prices) {
  let leftI = 0 // buy stock low
  let rightI = 1 // sell stock high
  let maxProfit = 0
  while (rightI < prices.length) {
    if (prices[leftI] < prices[rightI]) {
      // buy day comes first, sell day follows
      let currentProfit = prices[rightI] - prices[leftI]
      if (maxProfit < currentProfit) {
        maxProfit = currentProfit
      }
    } else {
      leftI = rightI
    }
    rightI++
  }
  return maxProfit
}

/// SHAN SOLUTION INCLUDING EDGE CASE CONDITIONAL

var maxProfit = function (prices) {
  if (prices.length <= 1) return 0
  let buyPrice = prices[0]
  let profit = 0

  for (let i = 0; i < prices.length; i++) {
    // reset the value of buyPrice if it's less than initialized value at index 0
    buyPrice = Math.min(buyPrice, prices[i])
    // reset the value of profit if current index - buyPrice is positive
    if (prices[i] - buyPrice > profit) {
      profit = prices[i] - buyPrice
    }
  }
  // return whatever positive value remains
  return profit
}

// DOING THE SAME THING WITH NESTED LOOPS INSTEAD OF TWO POINTERS TIMES OUT
// var maxProfit = function(prices) {

//   let maxProfit = 0
//   for (let i = 0; i < prices.length; i++) {
//       for(let j = i + 1; j < prices.length; j++) {
//           if (prices[i] < prices[j]) {
//               let currentProfit = prices[j] - prices[i]
//                   maxProfit = Math.max(maxProfit, currentProfit)
//           }
//       }
//   }
//   return maxProfit
// };

// THIS SOLUTION WAS HEADED DOWN THE WRONG PATH
// var maxProfit = function(prices) {
//     // buy stock on one day (i)
//     // sell stock on different day (i)
//     // find lowest day
//     // find highest day and confirm it is after lowest day
//     for (let i = 0; i < prices.length; i++) {
//         for (let j = i + 1; j < prices.length; j++) {
//             const dupePrices = prices.slice()
//             const sorted = dupePrices.sort((a, b) => a - b)
//             const lowestIndex = prices.findIndex(x => x === sorted[0])
//             const high = sorted[sorted.length - 1]
//             const highestIndex = prices.findIndex(x => x === sorted[sorted.length - 1])
//             if (lowestIndex < highestIndex) {
//                 return high - low
//             } else {
//                 return 0
//             }
//         }
//     }
// };
