// find two numbers in the array
// that are equal and at most k apart from one another

// MAP VERSION
// RUNTIME 110ms (77.61%)
// MEMORY 66.4mb (18.37%)
var containsNearbyDuplicate = function (nums, k) {
  const hashmap = new Map()
  // if there already exists a hashmap entry, check its distance
  for (let i = 0; i < nums.length; i++) {
    if (i - hashmap.get(nums[i]) <= k) {
      return true
    }
    hashmap.set(nums[i], i)
  }
  return false
}

// ATTEMPT AT BRUTE FORCE SLIDING WINDOW. NOT PASSING ALL TEST

// var containsNearbyDuplicate = function(nums, k) {
//     if (k === 0) return false;
//   for (let i = 0, j = 1; j < nums.length - 1;) {
//       while (Math.abs(i - j) <= k) {
//           console.log('inside while')
//         if (nums[i] === nums[j]) {
//             return true;
//         }
//         else {
//             j++;
//         }
//       }
//       console.log('outside while')
//       console.log('i, nums[i]', i, nums[i])
//       console.log('j, nums[j]', j, nums[j])
//     i++;
//   }
//   return false;
// };
