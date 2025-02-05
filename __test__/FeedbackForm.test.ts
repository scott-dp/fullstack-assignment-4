import { expect, test } from 'vitest'
import {ref} from 'vue';
import { checkIfFormIsValid, isApiResponseSuccessful } from '../src/utils/FeedbackFormUtils';

test('checkIfFormIsValid function test', () => {
  expect(checkIfFormIsValid(ref(""), ref(""), ref(""))).toBe(false);
  expect(checkIfFormIsValid(ref("scott"), ref("duplessis"), ref(""))).toBe(false);
  expect(checkIfFormIsValid(ref(""), ref("duplessis"), ref("hei"))).toBe(false);
  expect(checkIfFormIsValid(ref("scott"), ref(""), ref("hei"))).toBe(false);
  expect(checkIfFormIsValid(ref("scott"), ref("duplessis"), ref("hei"))).toBe(true);
})

test("isApiResponseSuccessful test", () => {
  let mockApiResponse = {data: {status: "true"}};
  expect(isApiResponseSuccessful(mockApiResponse)).toBe(true);
  expect(isApiResponseSuccessful(null)).toBe(false);
  expect(isApiResponseSuccessful(undefined)).toBe(false);
  let invalidMockApiResponse = {data: null};
  expect(isApiResponseSuccessful(invalidMockApiResponse)).toBe(false);
  let anotherInvalidMockApiResponse = {data: undefined};
  expect(isApiResponseSuccessful(anotherInvalidMockApiResponse)).toBe(false);
})