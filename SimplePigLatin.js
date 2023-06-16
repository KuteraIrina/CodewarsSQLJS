function pigIt(str) {
    const words = str.split(' ');
    const pigLatinWords = words.map((word) => {
        if (/^[A-Za-z]+$/.test(word)) {
            const modifiedWord = word.slice(1) + word[0] + 'ay';
            return modifiedWord;
        } else {
            return word;
        }
    });
    const pigLatinSentence = pigLatinWords.join(' ');

    return pigLatinSentence;
}