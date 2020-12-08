const expenseReport = require('./input')

function totalSumOf(a) {
  return (b, c) => {
    return b + c === a
  }
}

const totalSumOf2020 = totalSumOf(2020)

let result = []

const getResult = (i) =>
  expenseReport
    .sort((a, b) => a - b)
    .reverse()
    .forEach((value, index, arr) => {
      if (totalSumOf2020(value, arr[arr.length - i])) {
        result.push(value, arr[arr.length - i])
      }
    })

let i = 1
while (result.length === 0 && i < expenseReport.length) {
  getResult(i)
  console.log(i)
  i++
}
console.log(result.reduce((acc, val) => acc * val))
