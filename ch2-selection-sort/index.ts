const findSmallest = (arr: number[]): number => {
    let smallest = arr[0]
    let smallestIndex = 0

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < smallest) {
            smallest = arr[i]
            smallestIndex = i
        }
      }

      return smallestIndex
}

const orderBySelection = (arr: number[]): number[] => {
    const newArr: number[] = []
    const length = arr.length

    for (let i = 0; i < length; i++) {
        let smallestIndex = findSmallest(arr)
        let smallestNumber = arr.splice(smallestIndex, 1)

        newArr.push(...smallestNumber)
    }

    return newArr
}

const unsortedArr = [5, 3, 6, 2, 10, 1, 200, 45, 22, 8, 4]

console.log(orderBySelection(unsortedArr))