const somar = require('./somar');

// TESTE 01
test('somar 3 + 5 é igual a 8', () => {
  expect(somar(3, 5)).toBe(8);
});

// TESTE 02
test('somar -3 + -5 é igual a -8', () => {
  expect(somar(-3, -5)).toBe(-8);
});

// TESTE 03
test('somar 7 + -2 é igual a 5', () => {
  expect(somar(7, -2)).toBe(5);
});

// TESTE 04
test('somar 0 + 9 é igual a 9', () => {
  expect(somar(0, 9)).toBe(9);
});

// TESTE 05
test('somar 2.5 + 3.1 é igual a 5.6', () => {
  expect(somar(2.5, 3.1)).toBe(5.6);
});

// TESTE 06
test('somar 4 + 2.5 é igual a 6.5', () => {
  expect(somar(4, 2.5)).toBe(6.5);
});

// TESTE 07
test("somar 'a' + 3 é igual a Caractere Invalido", () => {
  expect(somar('a', 3)).toBe('Caractere Invalido');
});

// TESTE 08
test('somar 999999999 + 999999999 é igual a 1999999998', () => {
  expect(somar(999999999, 999999999)).toBe(1999999998);
});

// TESTE 09
test('somar "1" + "2" é igual a 3', () => {
  expect(somar('1', '2')).toBe(3);
});
