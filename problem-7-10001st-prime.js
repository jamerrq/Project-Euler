let cachePrimes = { 1: false, 2: true, max: 2, primes: [2], size: 1 };

function isPrime(num) {
    if (cachePrimes.hasOwnProperty(num)) {
        return cachePrimes[num];
    } else {
        if (cachePrimes.max >= parseInt(num / 2)) {
            for (let prime of cachePrimes.primes) {
                if (num % prime == 0) {
                    cachePrimes[num] = false;
                    return false;
                }
            }
            cachePrimes[num] = true;
            cachePrimes.max = Math.max(cachePrimes.max, num);
            cachePrimes.primes.push(num);
            cachePrimes.size++;
            return true;
        }
        let bool = true;
        for (let i = 2; i < num; ++i) {
            if (num % i == 0) {
                bool = false;
                if (i > cachePrimes.max) {
                    cachePrimes.max = i;
                }
                if (!cachePrimes[i]) {
                    cachePrimes.primes.push(i);
                    cachePrimes.primes.sort((a, b) => a - b);
                    cachePrimes.size++;
                }
                cachePrimes[i] = true;
                break;
            }
        }
        if (bool) {
            if (num > cachePrimes.max) {
                cachePrimes.max = num;
            }
            if (!bool) {
                cachePrimes.primes.push(num);
                cachePrimes.primes.sort((a, b) => a - b);
                cachePrimes.size++;
            }
        }
        cachePrimes[num] = bool;
        return cachePrimes[num];
    }
}

function nthPrime(n) {
    let i = 3;
    while (cachePrimes.size < n) {
        isPrime(i++);
    }
    return cachePrimes.primes[n - 1];
}

console.log(nthPrime(100));
console.log(cachePrimes.primes);