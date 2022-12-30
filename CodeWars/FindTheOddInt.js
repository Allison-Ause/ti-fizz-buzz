// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
  let repeats = {}
  let solution = 0
  A.forEach((num) => {
    repeats[num] = (repeats[num] || 0) + 1
  })
  console.log('repeatArr', repeats)
  for (const [num, count] of Object.entries(repeats)) {
    console.log(`${num}, ${count}`)
    if (count % 2 != 0) {
      solution = Number(num)
    }
  }
  console.log('solution', solution)
  return solution
}

// XOR Operator (^) seems similar to the modulo

const findOdd = (xs) => xs.reduce((a, b) => a ^ b)

findOdd([2, 2, 1, 3, 3, 33, 42, 33, 1])
