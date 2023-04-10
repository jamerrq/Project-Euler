/**
 *    AUTOR: Jamer José Rebolledo Quiroz
 *   GITHUB: github.com/jamerrq
 * LINKEDIN: linkedin.com/in/jamerrq
 *
 * AUXILIAR FUNCTIONS TO SOLVE PROJECT EULER PROBLEMS
 */

class Primes {

    // Get primes until n
    constructor(n = 0) {
        this.sieve = undefined;
        this.maxim = undefined;
        this.count = undefined;
        this.primes = undefined;
        this.maxPrime = undefined;
        if (n) this.load_sieve(n);
    }

    load_sieve(n, save_primes = false, callback = undefined, save_sieve = true) {
        if (this.maxim && this.maxim >= n) return;
        this.maxim = n;
        if (save_primes) this.primes = [];
        if (n > 1) {
            this.count = 0;
            this.sieve = new Array(n).fill(true);
            for (let i = 2; i <= n; ++i) {
                if (this.sieve[i - 1]) {
                    this.count++;
                    if (callback) callback(i);
                    if (save_primes) {
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
        this.load_sieve(n);
        return this.sieve[n - 1];
    }

    getFacts(n) {
        if (n < 2) return [];
        this.load_sieve(n, true);
        if (this.isPrime(n)) return [n];
        let facts = [];
        for (let prime of this.primes) {
            while (n % prime == 0) {
                n /= prime;
                facts.push(prime);
            }
            if (n == 1) break;
        }
        return facts;
    }

    getDivs(n) {
        if (n < 2) return [];
        this.load_sieve(n, true);
        if (this.isPrime(n)) return [n];
        let divs = [];
        for (let prime of this.primes) {
            if (!(n % prime)) divs.push(prime);
        }
        return divs;
    }

}

let cacheFibo = { 0: 0, 1: 1 };
function fibo(n) {
    if (cacheFibo.hasOwnProperty(n)) {
        return cacheFibo[n];
    }
    cacheFibo[n] = fibo(n - 1) + fibo(n - 2);
    return cacheFibo[n];
}

function isPalindrome(str) {
    return str == str.split("").reverse().join("");
}

function gcd(a, b) {
    if (!b) return a;
    return gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}
