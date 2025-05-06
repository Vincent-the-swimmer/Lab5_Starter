// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// isPhoneNumber
// pass
test('phone valid: 555-321-9876', () => {
  expect(isPhoneNumber('555-321-9876')).toBe(true);
});
test('phone valid: (800)555-1212', () => {
  expect(isPhoneNumber('(800)555-1212')).toBe(true);
});
// fail
test('phone invalid: 123.456.7890', () => {
  expect(isPhoneNumber('123.456.7890')).toBe(false);
});
test('phone invalid: 1234567', () => {
  expect(isPhoneNumber('1234567')).toBe(false);
});

// isEmail
test('email valid: john_doe@domain.org', () => {
  expect(isEmail('john_doe@domain.org')).toBe(true);
});
test('email valid: Alice123@site.net', () => {
  expect(isEmail('Alice123@site.net')).toBe(true);
});
test('email invalid: jane.doe@domain.com', () => {
  expect(isEmail('jane.doe@domain.com')).toBe(false);
});
test('email invalid: user@domain.toolong', () => {
  expect(isEmail('user@domain.toolong')).toBe(false);
});

// isStrongPassword
test('password valid: a123', () => {
  expect(isStrongPassword('a123')).toBe(true);
});
test('password valid: Pass_1word', () => {
  expect(isStrongPassword('Pass_1word')).toBe(true);
});
test('password invalid: _start', () => {
  expect(isStrongPassword('_start')).toBe(false);
});
test('password invalid: a!23', () => {
  expect(isStrongPassword('a!23')).toBe(false);
});

// isDate
test('date valid: 9/9/2023', () => {
  expect(isDate('9/9/2023')).toBe(true);
});
test('date valid: 10/05/2000', () => {
  expect(isDate('10/05/2000')).toBe(true);
});
test('date invalid: 09-09-2023', () => {
  expect(isDate('09-09-2023')).toBe(false);
});
test('date invalid: 9/9/23', () => {
  expect(isDate('9/9/23')).toBe(false);
});

// isHexColor
test('hex valid: #1a2', () => {
  expect(isHexColor('#1a2')).toBe(true);
});
test('hex valid: ABCDEF', () => {
  expect(isHexColor('ABCDEF')).toBe(true);
});
test('hex invalid: #12', () => {
  expect(isHexColor('#12')).toBe(false);
});
test('hex invalid: 12345G', () => {
  expect(isHexColor('12345G')).toBe(false);
});
