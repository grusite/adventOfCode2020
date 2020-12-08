const expenseReport = require('../day1/input')

function totalSumOf(a) {
  return (b, c, d) => {
    return b + c + d === a
  }
}

const totalSumOf2020 = totalSumOf(2020)

let result = []

const sanitizedArr = expenseReport.sort((a, b) => a - b).reverse()

for (i = 0; i < sanitizedArr.length; i++) {
  for (k = sanitizedArr.length - 1; k > i + 1; k++) {
    if (totalSumOf2020(sanitizedArr[i], sanitizedArr[k], sanitizedArr[k - 1])) {
      result.push(sanitizedArr[i], sanitizedArr[k], sanitizedArr[k - 1])
      break
    }
  }
  if (result.length === 3) break
}

console.log(result)
