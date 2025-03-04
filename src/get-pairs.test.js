import { AssertionError, deepStrictEqual } from "node:assert";
import getPairs from "./get-pairs.js";

const runTests = () => {
    const tests = [
        { input: [[-5, 33, 2, 2, 3, 5, 0, 10, 3], 5], expected: [[2, 3], [5, 0], [-5, 10], [2, 3]], description: "Common case" },
        { input: [[1, 2, 3, 4], 10], expected: [], description: "No pairs case" },
        { input: [[1, 9], 10], expected: [[1, 9]], description: "Single pair case" },
        { input: [[1, 1, 3, 2, 2], 3], expected: [[1, 2], [1, 2]], description: "Multiple identical pairs" },
        { input: [[-1, -2, -3, -4, -5], -5], expected: [[-2, -3], [-1, -4]], description: "Negative numbers" },
        { input: [[], 5], expected: [], description: "No elements case" },
        { input: [[3, 3, 5, 2], 6], expected: [[3, 3]], description: "Pair with duplicate numbers" },
        { input: [[1, 2, 3, 4, 5, 6, 7, 8, 9], 10], expected: [[4, 6], [3, 7], [2, 8], [1, 9]], description: "Large array case" },
        { input: [[5, -3, 2, 10, -2, -1], 4], expected: [[5, -1]], description: "No valid pairs with mixed positive and negative numbers" },
    ];

    for (const { input, expected, description } of tests) {
        const start = performance.now();
        try {
            const result = getPairs(...input);
            const end = performance.now();
            deepStrictEqual(result, expected, description);
            console.log(`\x1b[32m✔ Passed:\x1b[0m ${description} (\x1b[35m${(end - start).toFixed(2)}ms\x1b[0m)`);
        } catch (error) {
            const end = performance.now();
            if (error instanceof AssertionError) {
                console.error(`\x1b[31m✖ Failed:\x1b[0m ${description} (\x1b[35m${(end - start).toFixed(2)}ms\x1b[0m)`);
                console.error(`  \x1b[33mExpected:\x1b[0m`, expected);
                console.error(`  \x1b[34mReceived:\x1b[0m`, getPairs(...input));
            } else {
                throw error;
            }
        }
    }

    console.log("\n\x1b[36mTest run complete.\x1b[0m");
};

runTests();