// print 1-100
// if num % 3 && num % 5, print ('fizzbuzz!')
// if num % 3, print ('fizz!')
// else if num % 5, print ('buzz!')

//   ---- OPTION ONE -----

for (let num = 1; num < 101; num++) {
  if (num % 3 === 0 && num % 5 === 0) console.log('FizzBuzz')
  else if (num % 3 === 0) console.log('Fizz!')
  else if (num % 5 === 0) console.log('Buzz')
  else console.log(num)
}

// only numbers printing are 15, 30, realized I need to equate the solution to 0
// would potentially combine first line to 15 instead of checking 3 & 5
// array method?

//   ----- OPTION TWO -----

let numbers = []
for (num = 1; num < 101; num++) {
  numbers.push(num)
}
// for each element in the array, convert it to fizz, buzz or fizzbuzz
convertedArray = numbers.map((num) => {
  if (num % 15 === 0) {
    return 'fizzbuzz'
  } else if (num % 3 === 0) {
    return 'buzz'
  } else if (num % 5 === 0) {
    return 'fizz'
  } else return num
  // if I don't return num, it will read Undefined
})
console.log(convertedArray.join(`/n`))

// TWO NEW SOLUTIONS FROM LEETCODE SOLVES
// WHILE LOOP AND STRINGS
// RUNTIME 69ms (75.71%)
// MEMORY 43.9mb (82.48%)

function fizzBuzz(n) {
  const fizzBuzzed = []
  let i = 1
  while (i <= n) {
    let str = ''
    if (i % 3 === 0) str += 'Fizz'
    if (i % 5 === 0) str += 'Buzz'
    if (str.length === 0) str = i.toString()
    fizzBuzzed.push(str)
    i++
  }
  return fizzBuzzed
}

// FOR LOOP WITH IF ELSE
// RUNTIME 67ms (83.80%)
// MEMORY 44.2mb (46.12%)

function fizzBuzz(n) {
  const fizzBuzzed = []
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      fizzBuzzed.push('FizzBuzz')
    } else if (i % 3 === 0) {
      fizzBuzzed.push('Fizz')
    } else if (i % 5 === 0) {
      fizzBuzzed.push('Buzz')
    } else {
      fizzBuzzed.push(i.toString())
    }
  }
  return fizzBuzzed
}
