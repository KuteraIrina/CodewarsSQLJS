function deleteNth(arr, n) {
    const countMap = new Map();
    const result = [];

    for (let num of arr) {
        if (countMap.has(num)) {
            countMap.set(num, countMap.get(num) + 1);
        } else {
            countMap.set(num, 1);
        }

        if (countMap.get(num) <= n) {
            result.push(num);
        }
    }

    return result;
}