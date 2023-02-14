// Company assigns membershipId. Sum each digit of the id and continue
// to sum until return has only one digit.Company

function createCheckDigit(membershipId) {
  // Write the code that goes here.
  // check digit for those ids
  // add all digits; if sum is number with more than 1 digit, iterate again
  const digits = membershipId.split('')
  console.log('digits:', digits)
  const sum = digits.reduce((acc, curr) => acc + curr)
  const finalNum = sum.split('')
  console.log('finalNum:', finalNum)
  if (finalNum.length > 1) {
    return createCheckDigit(sum)
  } else {
    console.log('firing else')
    return finalNum
  }
}

console.log(createCheckDigit('55555'))
Test
