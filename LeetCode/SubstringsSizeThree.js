// A string is good if there are no repeated characters.

// Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

// Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

// A substring is a contiguous sequence of characters in a string.

// WRONG ANSWER, GOT STUCK HERE
var countGoodSubstrings = function (s) {
  // good string = no duplicate letters
  // return # of good length-3 strings
  let count = 0
  let subStr = s[0]
  console.log('subStr:', subStr)

  for (left = 0, right = 1; right < s.length; right++) {
    console.log('s[left]:', s[left], 's[right]:', s[right])
    console.log('subStr.length:', subStr.length)
    if (subStr.length == 3) {
      count++
      subStr = s[left]
    }
    if (s[left] != s[right]) {
      subStr += s[right]
      console.log('subStr concat:', subStr)
    } else left++
  }
  return count
}
