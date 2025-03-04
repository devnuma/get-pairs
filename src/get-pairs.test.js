import { deepStrictEqual } from 'node:assert';
import getPairs from './get-pairs.js';

const result1 = getPairs([-5, 33, 2, 2, 3, 5, 0, 10, 3], 5);
deepStrictEqual(result1, [[2, 3], [5, 0], [-5, 10], [2, 3]], 'Common case');

const result2 = getPairs([1, 2, 3, 4], 10);
deepStrictEqual(result2, [], 'No pairs case');

const result3 = getPairs([1, 9], 10);
deepStrictEqual(result3, [[1, 9]], 'Single pair case');

const result4 = getPairs([1, 1, 3, 2, 2], 3);
deepStrictEqual(result4, [[1, 2], [1, 2]], 'Multiple identical pairs');

const result5 = getPairs([-1, -2, -3, -4, -5], -5);
deepStrictEqual(result5, [[-2, -3], [-1, -4]], 'Negative numbers');

const result6 = getPairs([], 5);
deepStrictEqual(result6, [], 'No elements case');

const result7 = getPairs([3, 3, 5, 2], 6);
deepStrictEqual(result7, [[3, 3]], 'Pair with duplicate numbers');

const result8 = getPairs([1, 2, 3, 4, 5, 6, 7, 8, 9], 10);
deepStrictEqual(result8, [[4, 6], [3, 7], [2, 8], [1, 9]], 'Large array case');

const result9 = getPairs([5, -3, 2, 10, -2, -1], 4);
deepStrictEqual(result9, [[5, -1]], 'No valid pairs with mixed positive and negative numbers');

console.log('All tests passed!');
