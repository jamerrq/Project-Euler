function multiplesOf3and5(number) {
    let suma = 0;
    for (let i = 3; i < number; ++i) {
        if (i % 3 == 0 || i % 5 == 0) suma += i;
    }
    return suma;
}

console.log(multiplesOf3and5(1000));
