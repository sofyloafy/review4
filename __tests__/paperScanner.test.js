let PaperScanner = require('../src/paperScanner')
let paperScanner = new PaperScanner

describe('#PaperScanner', () => {
  test('it should exist', () => {
    expect(paperScanner.calculate("1")).toEqual(["1", 1])
  })
})
