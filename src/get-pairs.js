function getPairs(arr, target) {
    const seen = new Map();
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const pair = target - element;

        if (seen.has(pair)) {
            const pairIndices = seen.get(pair);
            if (pairIndices.size > 0) {
                result.push([pair, element]);
                const [first] = pairIndices;
                pairIndices.delete(first);
            }
        }

        if (!seen.has(element)) seen.set(element, new Set());
        seen.get(element).add(i);
    }

    return result;
}

export default getPairs;
