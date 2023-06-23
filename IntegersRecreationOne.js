function listSquared(m, n) {
    const result = [];

    for (let num = m; num <= n; num++) {
        const divisors = getDivisors(num);
        const sumOfSquaredDivisors = divisors.reduce((sum, divisor) => sum + divisor * divisor, 0);

        if (isSquare(sumOfSquaredDivisors)) {
            result.push([num, sumOfSquaredDivisors]);
        }
    }

    return result;
}

function getDivisors(num) {
    const divisors = [];

    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            divisors.push(i);

            if (i !== num / i) {
                divisors.push(num / i);
            }
        }
    }

    return divisors;
}

function isSquare(num) {
    return Math.sqrt(num) % 1 === 0;
}