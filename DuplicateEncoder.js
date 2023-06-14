function duplicateEncode(word) {
    const charCount = {};
    const result = [];
    for (let i = 0; i < word.length; i++) {
        const char = word[i].toLowerCase();
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let i = 0; i < word.length; i++) {
        const char = word[i].toLowerCase();
        result.push(charCount[char] === 1 ? '(' : ')');
    }
    return result.join('');
}