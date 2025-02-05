import { expect, test } from 'vitest'
import { roundNumber, isResultValid, evaluateCalculationAsString } from '../src/utils/calculatorUtils';

test('roundNumber function test', () => {
  const numberToBeRounded = 1213.345346
  let roundedNumberResult = roundNumber(numberToBeRounded, 1);
  expect(roundedNumberResult).toBe(1213.3);
  roundedNumberResult = roundNumber(numberToBeRounded, 2);
  expect(roundedNumberResult).toBe(1213.35);
  roundedNumberResult = roundNumber(numberToBeRounded, 3);
  expect(roundedNumberResult).toBe(1213.345);
  roundedNumberResult = roundNumber(numberToBeRounded, 4);
  expect(roundedNumberResult).toBe(1213.3453);
})


test("test isResultValid function", () => {
  expect(isResultValid(NaN)).toBe(false);
  expect(isResultValid(9/0)).toBe(false); // 9/0 evalutes to Infinity
  expect(isResultValid(9)).toBe(true);
  expect(isResultValid(9.987654)).toBe(true);
  expect(isResultValid(1434.34653423)).toBe(true); 
})

test("test evaluateCalculationAsString function", () => {
  let stringToBeEvaluated = "12+53-1.6";
  expect(evaluateCalculationAsString(stringToBeEvaluated)).toBe(63.4);
  stringToBeEvaluated = "153*346-236.567";
  expect(evaluateCalculationAsString(stringToBeEvaluated)).toBe(52701.433);
  stringToBeEvaluated = "12.5/2.5+5.0";
  expect(evaluateCalculationAsString(stringToBeEvaluated)).toBe(10.0);
})