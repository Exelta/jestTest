const { fromDollarToYen } = require('./app');
const { fromEuroToDollar } = require('./app');
const { fromYenToPound } = require('./app');
test('2 dollars = 213.16 yen', () => {
    let suma = fromDollarToYen(2);
    expect(suma).toBe(213.16666666666669);
})
test('10 euro = 12 dollars', () => {
    let suma = fromEuroToDollar(10);
    expect(suma).toBe(12);
})
test('1279 yen = 8 pounds', () => {
    let suma = fromYenToPound(1279);
    expect(suma).toBe(8);
})