const lib = require('../lib')

test('upperCase', () => {
    expect(lib.upperCase('this should be upper')).toBe('This should be upper')
    expect(lib.upperCase('yo yo hello')).toBe('Yo yo hello')
    expect(lib.upperCase('testing one two three')).toBe('Testing one two three')
})

test('upperCaseEveryWord', () => {
    expect(lib.upperCaseEveryWord('this should be upper')).toBe('This Should Be Upper')
    expect(lib.upperCaseEveryWord('yo yo hello')).toBe('Yo Yo Hello')
    expect(lib.upperCaseEveryWord('testing one two three')).toBe('Testing One Two Three')
})

test('upperCaseEveryOtherLetter', () => {
    expect(lib.upperCaseEveryOtherLetter('this should be upper')).toBe('ThIs sHoUlD Be uPpEr')
    expect(lib.upperCaseEveryOtherLetter('yo yo hello')).toBe('Yo yO HeLlO')
    expect(lib.upperCaseEveryOtherLetter('testing one two three')).toBe('TeStInG OnE TwO ThReE')
})

test('deleteSpaces', () => {
    expect(lib.deleteSpaces('this should be upper')).toBe('thisshouldbeupper')
    expect(lib.deleteSpaces('yo yo hello')).toBe('yoyohello')
    expect(lib.deleteSpaces('testing one two three')).toBe('testingonetwothree')
})

test('deleteExtraSpaces', () => {
    expect(lib.deleteExtraSpaces('this     should be    upper')).toBe('this should be upper')
    expect(lib.deleteExtraSpaces('yo    yo    hello')).toBe('yo yo hello')
    expect(lib.deleteExtraSpaces('testing      one two    three')).toBe('testing one two three')
})

test('kabobCase', () => {
    expect(lib.kabobCase('this should be upper')).toBe('this-should-be-upper')
    expect(lib.kabobCase('yo yo hello')).toBe('yo-yo-hello')
    expect(lib.kabobCase('testing one two three')).toBe('testing-one-two-three')
})

test('snakeCase', () => {
    expect(lib.snakeCase('this should be upper')).toBe('this_should_be_upper')
    expect(lib.snakeCase('yo yo hello')).toBe('yo_yo_hello')
    expect(lib.snakeCase('testing one two three')).toBe('testing_one_two_three')
})

test('camelCase', () => {
    expect(lib.camelCase('this should be camel')).toBe('thisShouldBeCamel')
    expect(lib.camelCase('yo yo hello')).toBe('yoYoHello')
    expect(lib.camelCase('testing one two three')).toBe('testingOneTwoThree')
})