
function getPairs(arr, target) {
    const result = [];
    const used = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (used.has(i)) continue;
        for (let j = i + 1; j < arr.length; j++) {
            if (used.has(j)) continue;
            if (arr[i] + arr[j] === target) {
                result.push([arr[i], arr[j]]);
                used.add(i);
                used.add(j);
                break;
            }
        }
    }
    return result;
}