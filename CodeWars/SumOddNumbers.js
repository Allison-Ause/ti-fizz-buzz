// 1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29

// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8
// n = row of triangle

function rowSumOddNumbers(n) {
  return Math.pow(n, 3)
}

// DID NOT WIN this one. Stupid math. Basically the triangle structure makes it n^3,
// so Math.pow(n, 3) does that for you.
