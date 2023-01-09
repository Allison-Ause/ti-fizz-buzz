// WORKING WITH FOR/IN LOOPS

const crystal = {
  name: 'Hematite',
  origin: 'Madagascar',
  price: 45,
}

function checkCrystal(crystal) {
  for (let key in crystal) {
    console.log('crystal', crystal[key])
  }
  return
}

checkCrystal(crystal)
