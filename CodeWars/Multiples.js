function solution(number) {
  if (number < 0) return 0

  // return SUM of all numbers below number divisible by 3 or 5
  let range = []
  let divisible = []
  for (let i = 1; i < number; i++) {
    range.push(i)
  }
  range.map((num) => {
    if (num % 15 === 0) {
      return divisible.push(num)
    } else if (num % 3 === 0 || num % 5 === 0) {
      return divisible.push(num)
    } else return
  })

  const sum = divisible.reduce((acc, curr) => acc + curr)
  return sum
}
