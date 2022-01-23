const palindromeChecker = require('./palindromeChecker');

test('check if string is a palindrome - ignoring capitalisation', () => {
    expect(palindromeChecker('hannah')).toBe(true);
    expect(palindromeChecker('RoTatOr')).toBe(true);
    expect(palindromeChecker('kayak')).toBe(true);
    expect(palindromeChecker('123454321')).toBe(true);
    expect(palindromeChecker('Palindrome')).toBe(false);
    expect(palindromeChecker('numb3r')).toBe(false);
})