// Given two strings s and t, return true if t is
// an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging
// the letters of a different word or phrase, typically
// using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true

// MICROSERVICE TWO MAP VERSION:
// RUNTIME 89ms (66.85%)
// MEMORY 43.8ms (63.7%)
// REFACTOR INTO ONE MAP AND A LOOP
function createMap(string) {
  const map = new Map()
  for (const char of string) {
    map.set(char, (map.get(char) || 0) + 1)
  }

  return map
}

function isAnagram(s, t) {
  if (s.length !== t.length) return false
  // store all values of s in a map
  const sFrequencies = createMap(s)
  const tFrequencies = createMap(t)

  for (let i = 0; i < s.length; i++) {
    if (sFrequencies.get(s[i]) === tFrequencies.get(s[i])) {
      continue
    } else {
      return false
    }
  }
  return true
}

function createMap(string) {
  const map = new Map()
  for (const char of string) {
    map.set(char, (map.get(char) || 0) + 1)
  }

  return map
}

// ONE MAP AND A LOOP
// RUNTIME
// MEMORY

// SORT
