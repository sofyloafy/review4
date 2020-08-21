class PaperScanner {

  calculate(sum) {
    let paperResult = []
    let total = 0
    let splitSum = sum.split(" ")
    let paperNumbers = []
    let operator = ""
    splitSum.forEach(e => {
      if (isNaN(e)){
        operator = e
      } else {
        paperNumbers.push(parseInt(e, 10))
      }
    })
    if (operator === "+" && paperNumbers.length > 1) {
      total = paperNumbers.reduce((a, b) => a + b, 0)
    } else if (operator === "-") {
      total = paperNumbers.reduce((a, b) => a - b)
    } else if (operator === "*") {
      total = paperNumbers.reduce((a, b) => a * b)
    } else if (operator === "/") {
      total = paperNumbers.reduce((a, b) => a / b)
    }
    else {
      total += (parseInt(sum, 10))
    }
    paperResult.push(sum, total)
    return paperResult
  }


}

module.exports = PaperScanner