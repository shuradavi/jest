const square = require('./square');

describe('square', () => {
	let mockValue;
	// Переда каждый тестом
	beforeEach(() => {
	})
	// Один раз перед всеми тестами
	beforeAll(() => {

	})
	test('Корректное значение', () => {
		// expect(square(2)).toBe(4);
		// expect(square(2)).toBeLessThan(5);
		// expect(square(2)).toBeGreaterThan(3);
		// expect(square(2)).not.toBeUndefined();
		const spMathPow = jest.spyOn(Math, 'pow');
		square(2);
		expect(spMathPow).toBeCalledTimes(1)
	})

	test('Корректное значение', () => {
		const spMathPow = jest.spyOn(Math, 'pow');
		square(1);
		expect(spMathPow).toBeCalledTimes(0)
	})
	// После каждого теста
	afterEach(() => {
		jest.clearAllMocks()
	})
	// После всех тестов
	afterAll(() => {
	})

})