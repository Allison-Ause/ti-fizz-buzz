// put everythign in a function

// take in text, return array of "tokens" which are indibidual words in lower case.

function convertToTokens(text) {
  const tokens = text.toLowerCase().split(' ')
  return tokens // array of lower case words
}

// function that counts specific word occurence

// input is original text.
// output is data structure that gives all unique words
// when you access that word, it tells you how many times it occurs (object?)

// {word: '', : number }

function wordStats(text) {
  const map = {}
  const tokens = convertToTokens(text)

  tokens.forEach((token) => {
    if (map[token]) {
      map[token]++
    } else {
      map[token] = 1
    }
    // check if token exists as key in map
    // if yes: increment count;
    // if no: add as key value pair of token: 1
  })
}

// give percentages of word occurrence (token-value/tokens.length)

function wordPercentage(text) {
  const map = wordStats(text)
  const textLength = convertToTokens(text).length

  // call wordStats to get number of occurrence
  // iterate through to make new key value pair
  for (key in map) {
    map[key] = map[key] / textLength
  }
  return map
}

// analyze ranking
// reorder with most frequent word appearing first,
// then the least appearing word.
// Tie preserves order of appearance.

function wordRanking(text) {
  const rankingArr = []
  const frequencyMap = wordPercentage(text)
  // order by percentages value
  // turn into an array
  for (key in frequencyMap) {
    rankingArr.push([key, frequencyMap[key]])
  }
  // or could use Object.entries
  // const unorderedArr = Object.entries(frequenceMap)
  // which gives exactly the same as the for in loop

  rankingArr.sort((a, b) => a[1] - b[1])
  // sort restructures and returns the same array
  // OR
  // const frequencyA = a[1]
  // const frequencyB = b[1]
  // if(frequencyA < frequencyB) return 1
  // if(frequencyA) > frequencyB) return -1
  // if (frequencyA === frequencyB) return 0

  const cleanArr = orderedArr.map((item) => item[0])
  return cleanArr
}

// console.log({unorderedArr}) will show key value pairs instead of just values
// idempotency - no mutation; should always return the same
