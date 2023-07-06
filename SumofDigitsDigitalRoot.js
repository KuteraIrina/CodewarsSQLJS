function digitalRoot(n) {
    if (n < 10) {
        return n;
    }
    const digits = String(n).split('').map(Number);
    const sum = digits.reduce((acc, curr) => acc + curr, 0);
    return digitalRoot(sum);
}