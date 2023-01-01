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

/**
 * Function to fix to two digits after decimal point
 * @param {*} input 
 * @returns fix to two digits after decimal point
 */
export function fixToTwoDigitsAfterDecimalPoint(input) {
  return Number.parseFloat(input).toFixed(2);
}

/**
 * Function to calculate sum of squares
 * @param firstParam 
 * @param secondParam 
 * @returns sum of squares
 */
export function calculateSumOfSquares(firstParam, secondParam) {
  const sumOfSquares = firstParam * firstParam + secondParam * secondParam;
  return sumOfSquares;
}

/**
 * Function to calculate square root of a number
 * @param param 
 * @returns square root of a number
 */
export function getSquareRoot(param) {
  return Math.sqrt(param);
}
