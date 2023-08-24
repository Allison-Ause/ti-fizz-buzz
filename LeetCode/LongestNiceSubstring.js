// A string s is nice if, for every letter of the alphabet that s contains,
// it appears both in uppercase and lowercase. For example, "abABB" is nice because 'A'
// and 'a' appear, and 'B' and 'b' appear. However, "abA" is not because 'b' appears, but 'B' does not.

// Given a string s, return the longest substring of s that is nice. If there are multiple,
// return the substring of the earliest occurrence. If there are none, return an empty string.

// Example 1:

// Input: s = "YazaAay"
// Output: "aAa"
// Explanation: "aAa" is a nice string because 'A/a'
// is the only letter of the alphabet in s, and both 'A' and 'a' appear.
// "aAa" is the longest nice substring.

var longestNiceSubstring = function (s) {
  if (s.length < 2) return ''
  // nice letters appear twice, one upper, one lower case
  // return longest substring that is nice
  // return empty string if none
  // use recursion to keep making new Sets from smaller ranges
  let arr = [...s]
  let set = new Set(arr)
  // set a constant letter (from i in loop)
  // check for its upper and lower case in set
  // if yes, call recursion twice using that letter as a pivot point
  // once for upper range, once for lower range

  for (let i = 0; i < s.length; i++) {
    let letter = s[i]
    console.log('letter:', letter, 'set:', set)
    if (set.has(letter.toUpperCase()) && set.has(letter.toLowerCase())) continue
    // lower recursion
    console.log('s:', s)
    const lowerSub = longestNiceSubstring(s.substring(0, i))
    // upper recursion; don't need an upper limit, just the start index
    const upperSub = longestNiceSubstring(s.substring(i + 1))
    return upperSub.length > lowerSub.length ? upperSub : lowerSub
  }
  return s
}
