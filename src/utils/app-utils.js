/* eslint-disable */

/**
 * Function to check if input contains only spaces
 * @param input
 * @returns boolean
 */
export function containsOnlySpaces(input) {
  return /^\s*$/.test(input);
}

/**
 * Function to check if input is a number
 * @param input
 * @returns boolean
 */
export function isNotANumber(input) {
  return isNaN(input);
}

/**
 * Function to convert any input to integer
 * @param input
 * @returns integer
 */
export function convertToInteger(input) {
  return parseInt(input);
}

/**
 * Function to convert any input to number
 * @param input
 * @returns number
 */
export function convertToNumber(input) {
  return Number(input);
}

export function fixToTwoDigitsAfterDecimalPoint(input) {
  return Number.parseFloat(input).toFixed(2);
}
