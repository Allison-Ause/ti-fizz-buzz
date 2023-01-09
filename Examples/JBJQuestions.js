// GROCERIES QUESTION:

// Input:
const groceries = [
  ['toothbrush', '5', 5],
  ['cookies', '2', 2],
  ['soap', '5', 1],
  ['avocado', '3', 2],
  ['tomato', '3', 1],
]

// {
//   '5': ['toothbrush', 'soap'],
//   '3': ['avocado', 'tomato'],
//   '2': ['cookies']
// }

// aisle is key, list of items are the value
// key = [1]

function orderedByAisle(groceries) {
  const aisleObject = groceries.reduce((acc, curr) => {
    const aisle = curr[1]
    // check acc for curr[1]
    if (acc.hasOwnProperty(aisle)) {
      // if yes, add curr[0] & ignore price
      const addItem = acc[aisle].push(curr[0])
    } else {
      // if no, add curr[1] and curr[0]
      acc = { ...acc, [aisle]: [curr[0]] }
    }
    return acc
  }, {})
  return aisleObject
}

// DOG QUESTION:

//Input
const dogInfo = [
  ['spot', 'collar', 10],
  ['Ryan Mehta', 'water bottle', 25],
  ['spot', 'leash', 30],
  ['Rosey', 'lounging couch', 500],
  ['spot', 'treats', 3],
  ['Ryan Mehta', 'laptop charger', 35],
]

// return object with single dogs and their cumulative prices

function dogCost(dogInfo) {
  const dogsObject = dogInfo.reduce((acc, curr) => {
    const dog = curr[0]
    console.log('curr dog', dog)
    // check for dog's existence in acc
    console.log('exists in list?', acc.hasOwnProperty(dog))
    if (acc.hasOwnProperty(dog)) {
      // if exists, add acc price to curr price
      console.log('acc[dog]', acc[dog])
      // this should add the prices
      acc[dog] += curr[2]
    } else {
      console.log('[dog]', [dog])
      // in order to make the key the value of the var, you must bracket
      acc = { ...acc, [dog]: curr[2] }
      console.log('acc in else', acc)
    }

    // if not, add dog and price

    return acc
  }, {})
  console.log('dogsObject', dogsObject)
  return dogsObject
}

dogCost(dogInfo)

// SOLUTION WORKED WITH JBJ

// function dogCost(dogInfo) {
//   // return an object
//   dogInfo.reduce((acc, curr) => {
//     // functionality here
//     let name = curr[0]
//     let price = curr[2]
//     if (acc.hasOwnProperty(name)) {
//       acc[name] += price
//     } else {
//       acc = { ...acc, [name]: price }
//     }
//     console.log('acc', acc)
//     return acc
//   }, {})
//   // find all occurrences of dog
//   // tally the price for all
//   // put info into dog object
//   // return dog object
//   return dogInfo
// }

// returns an object containing the total price of that dog

//Output:
// {
//   "spot": 43,
//   "Ryan Mehta": 60,
//   "Rosie": 500
// }

// REVERSE STRING QUESTION:

//Input:
// const string = "Ryan Mehta";

//Output:
//'atheM nayR'

// function reverseString(string) {
//   let solution = []
//   const chars = string.split('')
//   for (let i = 0; i < chars.length; i++) {
//     solution.unshift(chars[i])
//   }
//   console.log('solution', solution.join(''))
//   return solution.join('')
// }

function reverseString(string) {
  let solution = ''
  for (let i = string.length - 1; i >= 0; i--) {
    solution += string[i]
    console.log(solution)
  }
  return solution
}
reverseString('Ryan Mehta')
