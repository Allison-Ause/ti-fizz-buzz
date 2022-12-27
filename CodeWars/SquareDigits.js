// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
  let newNum = []
  const digits = num.toString().split('')
  digits.forEach((x) => {
    newNum.push(parseInt(x, 10) * parseInt(x, 10))
  })
  return parseInt(newNum.join(''), 10)
}

squareDigits(3212)

// Wrap it in Number instead of parseInt. Better to use Map and return a new array
// ForEach will return nothing, simply doing what's in the brackets.
// .map will return a new array; that allows you to skip the push part because you're already making a new array

function squareDigits(num) {
  return Number(
    ('' + num)
      .split('')
      .map(function (val) {
        return val * val
      })
      .join(''),
  )
}
