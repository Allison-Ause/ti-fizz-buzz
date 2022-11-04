// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr(n, s) {
  let array = []

  for (i = 0; i < n; i++) {
    array.push(s)
    console.log(array)
  }
  const string = array.join('')
  console.log(string)
  return string
}

repeatStr(5, 'hi')

// Oops, looks like there's a super easy way called .repeat!

function repeatStr2(n, s) {
  return s.repeat(n)
}
