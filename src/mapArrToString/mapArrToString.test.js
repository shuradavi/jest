const mapArrToString = require('./mapArrToString.js');

describe('mapArrToString', () => {
	test('Корректное значение', () => {
		expect(mapArrToString([1, 2, 3])).toEqual([`1`, '2', '3'])
	})
	test('Массив строк', () => {
		expect(mapArrToString(['1', '2', '3'])).toEqual([])
	})
	test('Пустой массив', () => {
		expect(mapArrToString([])).toEqual([])
	})
	test('Смешанные типы', () => {
		expect(mapArrToString([1, null, 2, 'string', 3, undefined, true])).toEqual(['1', '2', '3'])
	})
	test('Отрицание', () => {
		expect(mapArrToString([1, 2, 3, 4, 5])).not.toEqual([`1`, '2', '3'])
	})
})