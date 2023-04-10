function triple(x) {
    if (x % 2) {
        return [x, (x ** 2) / 2 - 0.5, (x ** 2) / 2 + 0.5];
    }
    return [x, (x ** 2) / 4 - 1, (x ** 2) / 4 + 1];
}

function isTriple(a, b, c) {
    let arr = [a, b, c];
    arr.sort((a, b) => a - b);
    [a, b, c] = [...arr];
    return !(c ** 2 - a ** 2 - b ** 2);
}

function specialPythagoreanTriplet(n) {
    let min = 3;
    let max = n - min * 2;
    console.log(min, max);
    for(let a = min; a <= max - a; ++a){
        for(let b = min; b <= max; ++b){
            let c = n - a - b;
            if(isTriple(a, b, c)){
                return a * b * c;
            }
        }
    }
}

console.log(...triple(6));
console.log(specialPythagoreanTriplet(1000));
