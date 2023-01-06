const text =
  'eNgine Engineer engines enginE hat HATE hater hats hat hat hat bad bade bade forbade for fore for for fore text context texture texture texture context apple applet apP asp app app app bread breadth add ad add ad add add add'

//everything happens in functions!

//when i injest the text, return an output that is an array of "tokens" -- individual word + lowercase

const convertToTokens = (text) => {
  const tokens = text.toLowerCase().split(' ')
  return tokens
}

//function that provides data structure of word count + frequency w/in text
//for progressive functions, input will always be text

const analyzeText = (text) => {
  //check if token exists as key in map
  //if it does, increment the count
  //if it doesn't, add as a key value pair of "token": 1
  const map = {}
  const tokens = convertToTokens(text)

  tokens.forEach((token) => {
    if (map[token]) {
      map[token]++
    } else {
      map[token] = 1
    }
  })
  return map
}

//instead of {} data structure, we want percentages! (decimal is ok)
const analyzeFrequency = (text) => {
  //iterate over each key in map
  //create new key in frequencyMay
  //create percentage with each value over textLength
  const map = analyzeText(text)
  const textLength = convertToTokens(text).length

  for (key in map) {
    map[key] = map[key] / textLength
  }
  return map
}

//analyze ranking!
//reorganize dataset ordered in terms of frequency
//highest frequency first, preserve order of appearance

const analyzeRanking = (text) => {
  const frequencyMap = analyzeFrequency(text)
  const ranking = []

  //leverage a built-in sorting function
  //once i have the right shape of the sorting function, it should be simple

  //will want to sort by percentage
  //array will have to incorporate each value
  //output is the order of the words themselves

  //iterate over frequencyMap and call Object.entries, which will give me an array of key value pairs
  const unorderedArray = Object.entries(frequencyMap)
  const orderedArray = unorderedArray.sort((a, b) => {
    //we want to sort this first! split this up into multiple steps. clean it up later
    //a and b are subarrays!
    // a =  [ 'engine', 0.047619047619047616 ],
    // b = [ 'engineer', 0.023809523809523808 ],
    const frequencyA = a[1]
    const frequencyB = b[1]

    // if(frequencyA < frequencyB) return 1
    // if(frequencyA > frequencyB) return -1
    // if(frequencyA === frequencyB) return 0
    return frequencyB - frequencyA

    //if vs math: explicit use cases vs evaluting - considerations of how sort is working + keeping logic true to how method is working
  })

  const cleanArray = orderedArray.map((item) => item[0])

  //can access the frequency by its index
  //easy sort
  //flatten the array i'm working with and return just the tokens

  // output = ['app', 'ad', 'engineer', 'engines']
  return cleanArray
}

console.log('analyzeFrequency', analyzeFrequency(text))
console.log('analyzeRanking', analyzeRanking(text))
// think about this later! console.log({unorderedArray})
//"idempotency" - would want to start by knowing original-"final" data structure / no mutation

// analyzeRanking [
//   'add',   'hat',      'app',
//   'for',   'texture',  'engine',
//   'bade',  'fore',     'context',
//   'ad',    'engineer', 'engines',
//   'hate',  'hater',    'hats',
//   'bad',   'forbade',  'text',
//   'apple', 'applet',   'asp',
//   'bread', 'breadth'
// ]

console.log(['cucumber', 'banana', 'applet', 'apple'].sort())
//Alchemy long-haulers
//Aaron Dennis
//engineers or team-specific stakeholders may be better contacts than recruiters
//internal recruiters have the highest volume of contacts to field, least knowledge of actual job
//build up serendipitous moments
