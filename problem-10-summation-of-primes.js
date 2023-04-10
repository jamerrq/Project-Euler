function primeSummation(n) {
    if (n < 2) {
        return 0;
    }

    let isPrime = new Array(n).fill(true);
    let suma = 0;

    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            suma += i;
            for (let j = i ** 2; j < n; j += i) {
                if (isPrime[j]) {
                    isPrime[j] = false;
                }
            }
        }
    }
    return suma;
}
