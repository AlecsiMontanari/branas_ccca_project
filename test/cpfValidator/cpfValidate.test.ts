import { cleanString, isDigitCorrect, validateCpf } from "../../src/cpfValidator/cpfAfter";

test('Should return true to valid cpf', () => {
    const validCpf = '32557894869';
    const result = validateCpf(validCpf);
    expect(result).toBe(true);
});

test('Should return false for invalid cpf', () => {
    const invalidCpf = '32557894866';
    const result = validateCpf(invalidCpf);
    expect(result).toBe(false);
})

test('Should return false for invalid number of digits', () => {
    const invalidCpf = '325578948668';
    const result = validateCpf(invalidCpf);
    expect(result).toBe(false);
})

test('Should return false for empty value', () => {
    const invalidCpf = '';
    const result = validateCpf(invalidCpf);
    expect(result).toBe(false);
})

test('Should clean cpf value', () => {
    const validCpf = '325.578.948-69';
    const result = cleanString(validCpf);
    expect(result).toBe('32557894869');
})

test('Should throw error on invalid cpf cleaning', () => {
    const invalidCpf = '325.58.948-69';
    expect(()=>cleanString(invalidCpf)).toThrowError();
})

test('Should return true to code first digit correct', ()=> {
    const validCpf = '32557894869';
    const firstDigit = isDigitCorrect(validCpf, 1);
    expect(firstDigit).toBeTruthy();
})

test('Should return false to code first digit incorrect', ()=> {
    const invalidCpf = '32557894889';
    const firstDigit = isDigitCorrect(invalidCpf, 1);
    expect(firstDigit).toBeFalsy();
})

test('Should return true to code second digit correct', ()=> {
    const validCpf = '32557894869';
    const secondDigit = isDigitCorrect(validCpf, 2);
    expect(secondDigit).toBeTruthy();
})

test('Should return false to code second digit incorrect', ()=> {
    const invalidCpf = '32557894868';
    const second = isDigitCorrect(invalidCpf, 2);
    expect(second).toBeFalsy();
})