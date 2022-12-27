// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// "This website is for losers LOL!"
// "No offense but,\nYour writing is among the worst I've ever read"
// "What are you, a communist?"

function disemvowel(str) {
  let newStr = []
  // separate into single letters
  const letters = str.split('')
  // check for vowels
  // reassemble and return string
  letters.forEach((letter) => {
    if (
      letter === 'a' ||
      letter === 'A' ||
      letter === 'e' ||
      letter === 'E' ||
      letter === 'i' ||
      letter === 'I' ||
      letter === 'o' ||
      letter === 'O' ||
      letter === 'u' ||
      letter === 'U'
    ) {
      return
    } else {
      return newStr.push(letter)
    }
  })
  console.log(newStr.join(''))
  return newStr.join(' ')
}

disemvowel('This website is for losers LOL!')

// .REPLACE!!!!

function disemvowel(str) {
  return (str || '').replace(/[aeiou]/gi, '')
}

// .FILTER

const vowels = 'aeiou'

function disemvowel(str) {
  return str
    .split('')
    .filter((letter) => !vowels.includes(letter.toLowerCase()))
    .join('')
}
