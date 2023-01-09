// WORKING WITH FOR/IN LOOPS

const crystal = {
  name: 'Hematite',
  origin: 'Madagascar',
  price: 45,
}

function checkCrystal(crystal) {
  for (let key in crystal) {
    console.log('key', key)
    console.log('crystal', crystal[key])
  }
  return
}

function addToObject(arr, obj) {
  const key = arr[0]
  console.log('key', key)
  newObj = { ...obj, [key]: arr[1] }
  delete newObj.origin
  newObj.name = 'Malachite'
  console.log('newObj', newObj)
  return newObj
}

// checkCrystal(crystal)
addToObject(['color', 'Silver'], crystal)
