/**
 * @module Arithmetic
 * @description A module for basic arithmetic operations
 * @example
 * import { add } from './index';
 * console.log(add(1, 2)); // 3
 */

/**
 * Add two numbers
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The sum of the two numbers
 * @example add(1, 2) // 3
 */
export function add(a: number, b: number): number {
    return a + b;
}
