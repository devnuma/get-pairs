import { deepStrictEqual } from 'node:assert';
import getPairs from './get-pairs.js';

// Test 1: Example case
const result1 = getPairs([-5, 33, 2, 2, 3, 5, 0, 10, 3], 5);
deepStrictEqual(result1, [[2, 3], [5, 0], [-5, 10], [2, 3]], 'Test 1 failed');

// Test 2: No pairs case
const result2 = getPairs([1, 2, 3, 4], 10);
deepStrictEqual(result2, [], 'Test 2 failed');

// Test 3: Single pair case
const result3 = getPairs([1, 9], 10);
deepStrictEqual(result3, [[1, 9]], 'Test 3 failed');

// Test 4: Multiple identical pairs
const result4 = getPairs([1, 1, 3, 2, 2], 3);
deepStrictEqual(result4, [[1, 2], [1, 2]], 'Test 4 failed');

// Test 5: Negative numbers
const result5 = getPairs([-1, -2, -3, -4, -5], -5);
deepStrictEqual(result5, [[-2, -3], [-1, -4]], 'Test 5 failed');

// Test 6: No elements case
const result6 = getPairs([], 5);
deepStrictEqual(result6, [], 'Test 6 failed');

// Test 7: Pair with duplicate numbers
const result7 = getPairs([3, 3, 5, 2], 6);
deepStrictEqual(result7, [[3, 3]], 'Test 7 failed');

// Test 8: Large array case
const result8 = getPairs([1, 2, 3, 4, 5, 6, 7, 8, 9], 10);
deepStrictEqual(result8, [[4, 6], [3, 7], [2, 8], [1, 9]], 'Test 8 failed');

// Test 9: No valid pairs with mixed positive and negative numbers
const result9 = getPairs([5, -3, 2, 10, -2, -1], 4);
deepStrictEqual(result9, [[5, -1]], 'Test 9 failed');

console.log('All tests passed!');
