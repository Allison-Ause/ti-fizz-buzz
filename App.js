// print 1-100
// if num % 3 && num % 5, print ('fizzbuzz!')
// if num % 3, print ('fizz!')
// else if num % 5, print ('buzz!')

for (let num = 1; num < 101; num++) {
  if (num % 3 === 0 && num % 5 === 0) console.log('FizzBuzz')
  else if (num % 3 === 0) console.log('Fizz!')
  else if (num % 5 === 0) console.log('Buzz')
  else console.log(num)
}

// only numbers printing are 15, 30, realized I need to equate the solution to 0
// would potentially combine first line to 15 instead of checking 3 & 5
// array method?
