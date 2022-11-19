function Summation(num) {
  const array = []
  for (i = 1; i < num + 1; ++i) {
    array.push(i)
  }

  return array.reduce((acc, curr) => acc + curr)
}

Summation(3)

// solid first answer:

var summation = function (num) {
  let result = 0
  for (var i = 1; i <= num; i++) {
    result += i
  }

  return result
}
