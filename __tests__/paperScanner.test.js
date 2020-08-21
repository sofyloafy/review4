let PaperScanner = require('../src/paperScanner')
let paperScanner = new PaperScanner

describe('#PaperScanner', () => {
  test('it should return 1 as string and int', () => {
    expect(paperScanner.calculate("1")).toEqual(["1", 1])
  })

  test('it should string and sum of string', () => {
    expect(paperScanner.calculate("1 + 2")).toEqual(["1 + 2", 3])
  })

  test('it should string and sum of string', () => {
    expect(paperScanner.calculate("1 + 2 + 1")).toEqual(["1 + 2 + 1", 4])
  })

  test('it should allow minus sums', () => {
    expect(paperScanner.calculate("2 - 1")).toEqual(["2 - 1", 1])
  })

  test('it should allow minus sums', () => {
    expect(paperScanner.calculate("2 - 1 - 1")).toEqual(["2 - 1 - 1", 0])
  })

  test('it should allow multiplication sums', () => {
    expect(paperScanner.calculate("2 * 3")).toEqual(["2 * 3", 6])
  })

  test('it should allow multiplication sums', () => {
    expect(paperScanner.calculate("2 * 3 * 2")).toEqual(["2 * 3 * 2", 12])
  })

  test('it should allow multiplication sums', () => {
    expect(paperScanner.calculate("10 / 2")).toEqual(["10 / 2", 5])
  })

  test('it should allow multiplication sums', () => {
    expect(paperScanner.calculate("9 / 3 / 3")).toEqual(["9 / 3 / 3", 1])
  })
})
