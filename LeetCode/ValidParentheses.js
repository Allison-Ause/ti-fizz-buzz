// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true

// Runtime 57ms, 97.98%
// Memory 42.3mb,67.35%
var isValid = function (s) {
  const stack = []
  for (i = 0; i < singles.length; i++) {
    let c = singles[i]
    switch (c) {
      case '(':
        stack.push(')')
        break
      case '{':
        stack.push('}')
        break
      case '[':
        stack.push(']')
        break
      default:
        if (c !== stack.pop()) return false
    }
  }
  return stack.length === 0
}
