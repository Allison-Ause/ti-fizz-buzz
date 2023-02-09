// Given two strings ransomNote and magazine,
// return true if ransomNote can be constructed by using
// the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false

// OBJECT WITH TWO SEPARATE LOOPS
// RUNTIME 100ms (52.80%)
// MEMORY 43.8mb (85.31%)

var canConstruct = function (ransomNote, magazine) {
  let map = {}
  for (let i = 0; i < magazine.length; i++) {
    {
      map[magazine[i]] = (map[magazine[i]] || 0) + 1
    }
    //   map = {...map, [magazine[i]]: map[magazine[i]]++ || 1} DID NOT INCREASE
  }

  for (let letter of ransomNote) {
    if (!map[letter]) {
      return false
    } else {
      map[letter]--
    }
  }
  return true
}

// RESTRUCTURED SYNTAX WITH FOR/OF LOOP TO POPULATE MAP.
// LESS PERFORMANT

// RUNTIME 103ms (46.57%)
// MEMORY 45.2mb (48.68%)

var canConstruct = function (ransomNote, magazine) {
  let map = {}
  for (const letter of magazine) {
    map.hasOwnProperty(letter) ? map[letter]++ : (map[letter] = 1)
  }

  for (let letter of ransomNote) {
    if (!map[letter]) {
      return false
    } else {
      map[letter]--
    }
  }
  return true
}
