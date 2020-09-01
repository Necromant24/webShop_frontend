
export function containInArr (arr, item) {
  let itemInArr = false
  item = item + ''

  printDecorated(arr, item)

  for (let i = 0; i < arr.length; i++) {
    let arrItem = arr[i].toString()
    if (item === arrItem) {
      itemInArr = true
      console.log('!!!in statement!!!')
      break
    }
  }
  return itemInArr
}

function printDecorated (arr, some) {
  console.log('---------')
  console.log(arr, some)
  console.log('---------')
}
