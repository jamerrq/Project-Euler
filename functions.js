/**
 *    AUTOR: Jamer José Rebolledo Quiroz
 *   GITHUB: github.com/jamerrq
 * LINKEDIN: linkedin.com/in/jamerrq
 *
 */

let cachePrimes = { 1: false, 2: true, max: 2, primes: [2] };
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
            return true;
        }
        let bool = true;
        for (let i = 2; i < num; ++i) {
            if (num % i == 0) {
                bool = false;
                if(i > cachePrimes.max){
                    cachePrimes.max = i;
                    cachePrimes[i] = true;
                    cachePrimes.primes.push(i);
                }
                break;
            }
        }
        if (bool) {
            if(num > cachePrimes.max){
                cachePrimes.max = num;
                cachePrimes.primes.push(num);
            }
        }
        cachePrimes[num] = bool;
        return cachePrimes[num];
    }
}

// console.log(isPrime(271));
// console.log(isPrime(5));
// console.log(cachePrimes);

function getDivs(num) {
    let divs = [];
    let accm = 1;
    for (let i = 2; i <= parseInt(num / 2); ++i) {
        if (num % i == 0 && isPrime(i)) {
            divs.push(i);
            accm *= i;
        }
        if (accm == num) break;
    }
    divs.push(num);
    return divs;
}

console.log(getDivs(10));

let cacheFibo = {};
function fibo(n) {
    if (cacheFibo.hasOwnProperty(n)) {
        return cacheFibo[n];
    }
    if (n <= 1) {
        return n;
    }
    cacheFibo[n] = fibo(n - 1) + fibo(n - 2);
    return cacheFibo[n];
}

// console.log(fibo(100));

function isPalindrome(str) {
    return str == str.split("").reverse().join("");
}

function gcd(a, b){
    if(!b)return a;
    return gcd(b, a % b);
}

function lcm(a, b){
    return (a * b) / gcd(a, b);
}

// console.log(gcd(21, 14));
// console.log(lcm(4, 5));
