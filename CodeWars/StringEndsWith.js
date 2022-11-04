// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// failed first attempt because I didn't account for empty strings registering as true!
// corrected by adding that first if statement

function solution(str, ending) {
  const result = str.split(ending)
  if (ending === '') {
    return true
  } else if (result[result.length - 1] === '') {
    console.log('Success!')
  } else {
    const upperEnding = ending.charAt(0).toUpperCase() + ending.slice(1)
    console.log(
      `${upperEnding} does not conclude with the exact phrase "${str}"`,
    )
  }
}

solution('helloworld!', 'world')

// MUCH BETTER SOLUTION IS TO USE .endsWith

function solution2(str, ending) {
  return str.endsWith(ending)
  // this method returns true if it does and false if no. Nothing else is needed here.
}

solution2('helloJohn', 's')
