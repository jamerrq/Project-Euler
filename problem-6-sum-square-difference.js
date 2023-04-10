let cacheSuma = { max: 0, 0: 0 }, cacheSquares = { max: 0, 0: 0 };

function sumSquareDifference(n) {
    let suma = 0, squares = 0;
    for (let i = 0; i <= n; ++i)suma += i, squares += i ** 2;
    return suma ** 2 - squares;
}

console.log(sumSquareDifference(10));
