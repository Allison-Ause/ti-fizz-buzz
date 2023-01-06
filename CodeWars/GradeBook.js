// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

// Tried switch case first but that didn't work because it wasn't evaluating the number it was case based on grade (which didn't make sense for a switch)
function getGrade(s1, s2, s3) {
  const avg = (s1 + s2 + s3) / 3
  if (avg >= 90) {
    return 'A'
  } else if (avg >= 80 && avg < 90) {
    return 'B'
  } else if (avg >= 70 && avg < 80) {
    return 'C'
  } else if (avg >= 60 && avg < 70) {
    return 'D'
  } else return 'F'
}

function getGrade2(s1, s2, s3) {
  const avg = (s1 + s2 + s3) / 3
  if (avg < 60) return 'F'
  else if (avg < 70) return 'D'
  else if (avg < 80) return 'C'
  else if (avg < 90) return 'B'
  else return 'A'
}

function getGrade3(s1, s2, s3) {
  const avg = (s1 + s2 + s3) / 3
  return avg < 60 ? 'F' : avg < 70 ? 'D' : avg < 80 ? 'C' : avg < 90 ? 'B' : 'A'
}

console.log(getGrade3(55, 45, 60))

// This is a version that works for a switch case. I just needed to write "true" as the case instead of the letter grade.
function getGrade(s1, s2, s3) {
  var avg = (s1 + s2 + s3) / 3
  switch (true) {
    case avg >= 90:
      return 'A'
    case avg >= 80:
      return 'B'
    case avg >= 70:
      return 'C'
    case avg >= 60:
      return 'D'
    default:
      return 'F'
  }
}
