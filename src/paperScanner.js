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
    }
    else {
      total += (parseInt(sum, 10))
    }
    paperResult.push(sum, total)
    console.log(paperResult, "Final arr")
    return paperResult
  }


}

module.exports = PaperScanner