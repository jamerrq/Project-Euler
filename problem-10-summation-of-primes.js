class Primes {

    // Get primes below n
    constructor(n = 0) {
        this.sieve = undefined;
        this.maxim = undefined;
        this.count = undefined;
        this.primes = undefined;
        this.maxPrime = undefined;
        if (n) this.load_sieve(n);
    }

    load_sieve(n, save_primes = false, callback = undefined) {
        if (this.maxim && this.maxim >= n) return;
        this.maxim = n;
        if (n > 1) {
            this.count = 0;
            if (!this.sieve) this.sieve = new Array(n).fill(true);
            for (let i = 2; i <= n; ++i) {
                if (this.sieve[i - 1]) {
                    this.count++;
                    if (callback) callback(i);
                    if (save_primes) {
                        if (!this.primes) this.primes = [];
                        this.primes.push(i);
                    }
                    if (!this.maxPrime) this.maxPrime = i;
                    this.maxPrime = Math.max(this.maxPrime, i);
                    for (let k = i ** 2; k <= n; k += i) {
                        if (this.sieve[k - 1]) this.sieve[k - 1] = false;
                    }
                }
            }
        }
    }

    isPrime(n) {
        if (!this.maxim || n > this.maxim) this.load_sieve(n);
        return this.sieve[n - 1];
    }
}

function primeSummation(n) {
    if (n < 2) {
        return 0;
    }

    let primes = new Primes();
    let suma = 0;
    let callback = (value) => suma += value;
    primes.load_sieve(n - 1, false, callback);
    return suma;
}

console.log(primeSummation(3));
