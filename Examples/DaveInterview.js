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
  console.log('return arr:', instanceArr)
  return instanceArr
}

function howMany(array) {
  const newArr = []
  for (let i = 0; i < array.length; i++) {
    if (!newArr.find((x) => x === array[i])) {
      newArr.push(array[i])
    }
    // if (!newArr.includes(array[i])) {
    //   newArr.push(array[i])
    // }
  }
  console.log('newArr:', newArr)
  return newArr
}

instance(inputArray)
howMany(inputArray)
