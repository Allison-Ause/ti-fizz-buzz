// Given a palindromic string of lowercase English letters palindrome, 
// replace exactly one character with any lowercase English letter so that the resulting string 
// is not a palindrome and that it is the lexicographically smallest one possible.

// Return the resulting string. If there is no way to replace a character 
// to make it not a palindrome, return an empty string.

// A string a is lexicographically smaller than a string b (of the same length) 
//if in the first position where a and b differ, a has a character strictly smaller 
// than the corresponding character in b. For example, "abcc" is lexicographically smaller 
// than "abcd" because the first position they differ is at the fourth character, and 'c' is smaller than 'd'.


// a < b

var breakPalindrome = function(palindrome) {
  const arr = palindrome.split('')
    if (arr.length === 1) return '';
  const index = arr.indexOf(arr.find(i => i != 'a'));
  if (index === -1) {
    arr.splice(arr.length - 1, 1, 'b')
  } else {
    arr.splice(index, 1, 'a')
  }

  console.log(arr);

  return arr.join('');


    // split into array of strings
    // if array[0] === 'a', 
    // find first index of !a and replace it with a?
  // forgot case in which it's all a. Put in a guard for if B.
};
// running into issues where I accidentally create the palindrome
// feels like I need to map through or something? I can't possibly if/else all these cases
// palindrome =
// "aba"
// 26 / 31 testcases passed
// Output
// "aaa"
// Expected
// "abb"

breakPalindrome("aa")