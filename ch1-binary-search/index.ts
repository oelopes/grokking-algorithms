// O(n)
const numberToArray = (number = 0) => {
  let array: number[] = []

  for (let i = 1; i <= number; i++) {
      array.push(i)
  }

  return array
}

// O(log n)
const binarySearch = (totalArray: number[], element: number): number | null => {
  let lower = 0
  let higher = totalArray.length - 1
  let count = 0

  while(lower <= higher) {
    let middle = parseInt(((lower + higher) / 2).toFixed())
    let guess = totalArray[middle - 1]
    count++

      if(guess === element) {
          console.log("STEPS: ", count, 'Result: ', middle)
          return middle
      }

      if(guess > element) {
          higher = middle - 1
      }

      if(guess < element) {
          lower = middle + 1
      }
  }

  return null
}

const numberArray = numberToArray(24000000)
binarySearch(numberArray, 1)