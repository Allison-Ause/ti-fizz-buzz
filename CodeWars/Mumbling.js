// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  let arr = []
  let i = 0
  // put string in toLowerCase
  // split into individual characters.
  const littles = s.toLowerCase().split('')

  littles.map((x) => {
    i++
    const snippet = x.repeat(i)
    arr.push(snippet.charAt(0).toUpperCase() + snippet.slice(1))
  })

  return arr.join('-')
}

accum('waHoa')

// Originally tried to use indexOf but didn't realize it would only return the first occurence
// of that variable (so it was adding too few letters sometimes)
// To fix, I initialized a number (i) and incremented it through every mapping
// the I used that for the .repeat so I didn't even have to fuss with the index.

// OPTION TWO

function accum(s) {
  return s
    .split('')
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join('-')
}

// MAP HAS ITS OWN INDEX BUILT IN!!!!
