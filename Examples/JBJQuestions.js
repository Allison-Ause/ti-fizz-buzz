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
      const addItem = acc.aisle.push(curr[1])
      console.log('addedItem', addItem)
    } else {
      acc = { ...acc, [aisle]: [curr[1]] }
      console.log('acc in else', acc)
    }
    return acc
    // if yes, add curr[0] & ignore price
    // if no, add curr[1] and curr[0]
  }, {})
  console.log('aisleObject', aisleObject)
  return aisleObject
}

orderedByAisle(groceries)

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

dogCost([
  ['spot', 'collar', 10],
  ['Ryan Mehta', 'water bottle', 25],
  ['spot', 'leash', 30],
  ['Rosey', 'lounging couch', 500],
  ['spot', 'treats', 3],
  ['Ryan Mehta', 'laptop charger', 35],
])

// returns an object containing the total price of that dog

//Output:
// {
//   "spot": 43,
//   "Ryan Mehta": 60,
//   "Rosie": 500
// }

// REVERSE STRING QUESTION:

//Input:
// const array = "Ryan Mehta";

//Output:
//'atheM nayR'
