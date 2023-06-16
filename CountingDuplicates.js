function duplicateCount(text) {
    const lowerText = text.toLowerCase();
    const charMap = {};
    for (let char of lowerText) {
        charMap[char] = (charMap[char] || 0) + 1;
    }
    let count = 0;
    for (let key in charMap) {
        if (charMap[key] > 1) {
            count++;
        }
    }

    return count;
}