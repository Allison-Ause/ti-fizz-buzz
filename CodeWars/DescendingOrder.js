// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n) {
  const string = n.toString()
  const split = string
    .split('')
    .sort((a, b) => Number(b) - Number(a))
    .join('')
  console.log('split', split)
  return n

  // Consolidated second draft
  function descendingOrder(n) {
    return Number(
      n
        .toString()
        .split('')
        .sort((a, b) => Number(b) - Number(a))
        .join(''),
    )
  }
}

// Solution for regular sort and then reverse with parseInt instead of Number

function descendingOrder(n) {
  return parseInt(String(n).split('').sort().reverse().join(''))
}

descendingOrder([42145])
