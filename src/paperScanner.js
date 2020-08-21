class PaperScanner {

  calculate(sum) {
    let paperResult = []
    let total = 0
    // total += (parseInt(sum, 10))
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
    total = paperNumbers.reduce((a, b) => a + b, 0)
    paperResult.push(sum, total)
    return paperResult
  }


}

module.exports = PaperScanner