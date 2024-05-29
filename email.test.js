const ValidarEmail = require('./email');

// TESTE 12
test('Validação de Email', () => {
  expect(ValidarEmail("foo.bar@gmail.com")).toBe(true);
});

// TESTE 13
test('Validação de Email', () => {
  expect(ValidarEmail("foo.bar@gmail.com.br")).toBe(true);
});

// TESTE 14
test('Validação de Email', () => {
  expect(ValidarEmail("foo.bar@gmail.com.br.br")).toBe(false);
});

// TESTE 15
test('Validação de Email', () => {
  expect(ValidarEmail("foo.bar@gmail.")).toBe(false);
});

// TESTE 16
test('Validação de Email', () => {
  expect(ValidarEmail("foo.bar@gmailcom")).toBe(false);
});

// TESTE 17
test('Validação de Email', () => {
  expect(ValidarEmail("foo.bargmail.com")).toBe(false);
});

// TESTE 18
test('Validação de Email', () => {
  expect(ValidarEmail("@gmail.com")).toBe(false);
});
