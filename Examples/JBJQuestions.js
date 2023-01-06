// Groceries:
//Input:
// const groceries = [
//   ["toothbrush", "5", 5],
//   ["cookies", "2", 2],
//   ["soap", "5", 1],
//   ["avocado", "3", 2],
//   ["tomato", "3", 1]
// ];

//Output:
// {
//   '5': ['toothbrush', 'soap'],
//   '3': ['avocado', 'tomato'],
//   '2': ['cookies']
// }

// aisle is key, list of items are the value

//Pet stuff
//Input
const dogInfo = [
  ['spot', 'collar', 10],
  ['Ryan Mehta', 'water bottle', 25],
  ['spot', 'leash', 30],
  ['Rosey', 'lounging couch', 500],
  ['spot', 'treats', 3],
  ['Ryan Mehta', 'laptop charger', 35],
]

function dogCost(dogInfo) {
  // return an object
  dogInfo.reduce((acc, curr) => {
    // functionality here
    let name = curr[0]
    let price = curr[2]
    if (acc.hasOwnProperty(name)) {
      acc[name] += price
    } else {
      acc = { ...acc, [name]: price }
    }
    console.log('acc', acc)
    return acc
  }, {})
  // find all occurrences of dog
  // tally the price for all
  // put info into dog object
  // return dog object
  return dogInfo
}

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

//Input:
// const array = "Ryan Mehta";

//Output:
//'atheM nayR'
