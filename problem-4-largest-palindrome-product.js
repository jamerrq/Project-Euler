/**
 *    AUTOR: Jamer José Rebolledo Quiroz
 *   GITHUB: github.com/jamerrq
 * LINKEDIN: linkedin.com/in/jamerrq
 *
 */

function isPalindrome(str) {
    return str == str.split("").reverse().join("");
}

function largestPalindromeProduct(n) {
    let min = 10 ** (n - 1), max = 10 ** n - 1;
    let i = max, j = max;
    let max_p = undefined;
    for (let i = max; i >= min; --i) {
        for (let j = max; j >= min; --j) {
            let product = i * j;
            if (max_p && product < max_p) break;
            if (isPalindrome(String(product))) {
                if (max_p) {
                    max_p = Math.max(max_p, product);
                } else {
                    max_p = product;
                }
            }
        }
        if(i * max < max_p)break;
    }
    return max_p;
}

console.log(largestPalindromeProduct(5));
