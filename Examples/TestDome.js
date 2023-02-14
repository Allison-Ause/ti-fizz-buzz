// Company assigns membershipId. Sum each digit of the id and continue
// to sum until return has only one digit.Company

function createCheckDigit(membershipId) {
  const digits = membershipId.split('')
  // const sum = digits.reduce((acc, curr) => acc + Number(curr))
  let sum = 0
  for (let num of digits) {
    sum += parseInt(num)
  }
  const finalNum = sum.toString().length
  return finalNum.length > 1 ? createCheckDigit(sum) : finalNum
}

createCheckDigit('555789879855')
