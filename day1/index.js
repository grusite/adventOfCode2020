const expenseReport = require('./input')

function totalSumOf(a) {
  return (b, c) => {
    return b + c === a
  }
}

const totalSumOf2020 = totalSumOf(2020)
// console.log(totalSumOf(2020)(2000, 20))

// expenseReport.map((value, index, arr) => console.log(value, index))
// console.log(expenseReport.filter((val) => val < 2020))
// console.log(expenseReport.sort((a, b) => a - b).reverse())
//   .map((value, index, arr) => {
//     // console.log(totalSumOf2020(value, arr[arr.length - 1]))
//     if (totalSumOf2020(value, arr[arr.length - 1])) {
//       return [value, arr[arr.length - 1]]
//     }
//   })
// expenseReport
//   .filter((val) => val < 2020)
//   .sort((a, b) => a - b)
//   .reverse()
//   .filter((value, index, arr) => {
//     if (totalSumOf2020(value, arr[arr.length - 1])) {
//       console.log(value, arr[arr.length - 1])
//     }
//     // totalSumOf2020(value, arr[arr.length - 1])
//   })

console.log(
  expenseReport
    .sort((a, b) => a - b)
    .reverse()
    .filter((value, index, arr) => {
      return totalSumOf2020(value, arr[arr.length - 1])
    })
    .push()
)
