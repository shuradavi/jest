const validateValue = require('./validateValue');

describe('validateValue', () => {
	test('Корректное значение', () => {
		expect(validateValue(30)).toBe(true)
	})
	test('Меньше допустимого', () => {
		expect(validateValue(-1)).toBe(false)
	})
	test('Больше допустимого', () => {
		expect(validateValue(101)).toBe(false)
	})
	test('Корректное значение', () => {
		expect(validateValue(null)).toBe(true)
	})
})