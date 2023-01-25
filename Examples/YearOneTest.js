// INSTRUCTIONS

// Hey! I know you’re new but I need some help.

// We are a uniform factory and each company that we service needs a complete
// set of uniform pieces with their custom logo. Each piece that we have ready
// is labled with the company name and piece like this: “company1_shirt” or “company2_hat”.

// I’m going to give you a list of pieces that are in the uniform set (uniformSet)
// and which pieces we have (uniformPieces) ready, can you let me know which
// company has a missing piece from their uniform set? There should, at maximum,
// only be 1 company with missing items.

// For example: If the uniformSet needs:

// [“hat”, “glasses”]

// & the uniformPieces has:

// [“company1_hat”, “company1_glasses”, “company2_hat”]

// Then “company2” would be the one missing items for the full set.

// Return a string of the company name that is missing items, if a
// company isn’t missing any items, please return N/A

// T1 shoe, shirt AstroCorp_shoe,BetaCorp_hat,CaliCorp_pant,AstroCorp_shirt,DeltaCorp_pant,BetaCorp_shirt,AstroCorp_belt,DeltaCorp_shoe,BetaCorp_belt,BetaCorp_shoe,CaliCorp_shirt,CaliCorp_shoe,AstroCorp_hat,CaliCorp_belt,CaliCorp_jacket,DeltaCorp_belt,DeltaCorp_pant,AstroCorp_pant,DeltaCorp_lanyard,DeltaCorp_shirt
// T2 hat,glasses, company1_hat,company1_glasses,company2_hat
// T3 shoe,shirt,belt,pant, AstroCorp_shoe,BetaCorp_hat,CaliCorp_pant,AstroCorp_shirt,DeltaCorp_pant,BetaCorp_shirt,AstroCorp_belt,DeltaCorp_shoe,BetaCorp_belt,BetaCorp_shoe,CaliCorp_shirt,CaliCorp_shoe,AstroCorp_hat,CaliCorp_belt,CaliCorp_jacket,DeltaCorp_belt,DeltaCorp_pant,AstroCorp_pant,DeltaCorp_lanyard,DeltaCorp_shirt

// exports.solution = function (uniformSet, uniformPieces) {
//   // Please write your code here.
//   let hashmap = {}
//   uniformPieces.map((str) => {
//     const strArr = str.split('_')
//     console.log('splitStrings:', strArr)
//     if (hashmap[strArr[0]]) {
//       hashmap[strArr[0]] = [...hashmap[strArr[0]], strArr[1]]
//     } else {
//       [hashmap[strArr[0]]] = strArr[1]
//     }
//   })
//   console.log('hashmap:', hashmap)

//   for (let i = 0; i < uniformSet.length; i++) {
//     console.log('hashmap[i]:', hashmap.i)
//     console.log('hashmapkey:', [hashmap[i]])
//     const found = hashmap[i].find((item) => item === uniformSet[i])
//     if (!found) return [hashmap[i]]
//   }
// }

function clothes(uniformSet, uniformPieces) {
  let hashmap = new Map()
  const splitStrings = uniformPieces.forEach((str) => {
    // split each string into a subarray of the company and the item
    const strArr = str.split('_')
    // if the company has already been stored, add the item to the value array
    if (hashmap.has(strArr[0])) {
      const copy = [...hashmap.get(strArr[0])]
      // copy works because we're using primitive values
      // (can't copy arrays or objects because they stay in memory)
      copy.push(strArr[1])
      hashmap.set(strArr[0], copy)
    } else {
      // if the company has not been stored, add the company and the initial value
      hashmap.set(strArr[0], [strArr[1]])
    }
  })
  console.log('splitStrings:')
  console.log('hashmap:', hashmap)
  // loop to compare uniformSet and hashmap
  // if uniformSet.length === hashmap value length
  return splitStrings

  // { companyName: { 'shoe': 1, 'pants': 2, }}
  // companyName[shoe] ?
  // O^1
}

// return string of company name that is missing items.
// if company has all items, return "N/A"

const uniformSet = ['shoe', 'shirt']
const uniformPieces = [
  'AstroCorp_shoe',
  'BetaCorp_hat',
  'CaliCorp_pant',
  'AstroCorp_shirt',
  'DeltaCorp_pant',
  'BetaCorp_shirt',
  'AstroCorp_belt',
  'DeltaCorp_shoe',
  'BetaCorp_belt',
  'BetaCorp_shoe',
  'CaliCorp_shirt',
  'CaliCorp_shoe',
  'AstroCorp_hat',
  'CaliCorp_belt',
  'CaliCorp_jacket',
  'DeltaCorp_belt',
  'DeltaCorp_pant',
  'AstroCorp_pant',
  'DeltaCorp_lanyard',
  'DeltaCorp_shirt',
]
clothes(uniformSet, uniformPieces)
