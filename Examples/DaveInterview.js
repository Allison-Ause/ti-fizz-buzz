// given an array, return a new array without manipulating the original that
// returns every single instance of a number in the order they occur.
// IE:

// outputArray = [1, 2, 3, 5, 8]

const inputArray = [1, 2, 2, 3, 5, 8, 3]

function instance(array) {
  const instanceArr = array.reduce((acc, curr) => {
    // if acc does not already have that number, add to array
    if (!acc.includes(curr)) {
      acc.push(curr)
    }
    return acc
  }, [])
  return instanceArr
}

function howMany(array) {
  // add edge case for zero or one
  const newArr = []
  for (let i = 0; i < array.length; i++) {
    if (!newArr.find((x) => x === array[i])) {
      newArr.push(array[i])
    }
  }
  return newArr
}

function setVersion(array) {
  const set = new Set()
  // add to set
  for (let i = 0; i < array.length; i++) {
    set.add(array[i])
  }
  const returnArr = [...set]
  return returnArr
}

instance(inputArray)
howMany(inputArray)
setVersion(inputArray)
