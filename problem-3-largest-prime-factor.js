/**
 *    AUTOR: Jamer José Rebolledo Quiroz
 *   GITHUB: github.com/jamerrq
 * LINKEDIN: linkedin.com/in/jamerrq
 *
 */

let cache = { 1: false, 2: true, max: 2, primes: [2] };
function isPrime(num) {
    if (cache.hasOwnProperty(num)) {
        return cache[num];
    } else {
        if (cache.max >= parseInt(num / 2)) {
            for (let prime of cache.primes) {
                if (num % prime == 0) {
                    cache[num] = false;
                    return false;
                }
            }
            cache[num] = true;
            cache.max = Math.max(cache.max, num);
            cache.primes.push(num);
            return true;
        }
        let bool = true;
        for (let i = 2; i < num; ++i) {
            if (num % i == 0) {
                bool = false;
                cache[i] = true;
                cache.primes.push(i);
                cache.max = Math.max(cache.max, i);
                break;
            }
        }
        if (bool) {
            cache.max = Math.max(cache.max, num);
            cache.primes.push(num);
        }
        cache[num] = bool;
        return cache[num];
    }
}

function largestPrimeFactor(number) {
    let maxFactor = number;
    for (let i = 2; i < number; ++i) {
        if (number % i == 0 && isPrime(i)) {
            maxFactor = i;
        }
    }
    return maxFactor;
}

console.log(largestPrimeFactor(212342151));
