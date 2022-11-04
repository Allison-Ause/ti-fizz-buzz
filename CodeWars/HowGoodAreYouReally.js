// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

const classPoints = [50, 40]
const yourPoints = 75

function betterThanAverage(classPoints, yourPoints) {
  const classArray = [...classPoints, yourPoints]
  return classArray.reduce((acc, curr) => acc + curr, 0) / classArray.length <
    yourPoints
    ? true
    : false
}

betterThanAverage(classPoints, yourPoints)

// turns out I didn't even need the ternary because it already evaluates as a true or false.

function betterThanAverage2(classPoints, yourPoints) {
  const classArray = [...classPoints, yourPoints]
  console.log(
    yourPoints >
      classArray.reduce((acc, curr) => acc + curr, 0) / classArray.length,
  )
}

betterThanAverage2(classPoints, yourPoints)
