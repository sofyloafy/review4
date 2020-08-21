let PaperScanner = require('../src/paperScanner')
let paperScanner = new PaperScanner

describe('#PaperScanner', () => {
  test('it should return 1 as string and int', () => {
    expect(paperScanner.calculate("1")).toEqual(["1", 1])
  })

  test('it should string and sum of string', () => {
    expect(paperScanner.calculate("1 + 2")).toEqual(["1 + 2", 3])
  })
})
