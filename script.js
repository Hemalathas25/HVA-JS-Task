/**using regular function declaration */
function isPrimeRegular(num){
    if (num < 2){
    return 0;
    }

    for (let i=2; i<= Math.sqrt(num); i++){
    if (num % i ===0){
    return 0;
    }
    }
    return 1;
    }

/** using an anonymous function */
const isPrimeAnonymous = function(num){
    if (num < 2){
        return 0;
    }

    for (let i=2; i<= Math.sqrt(num); i++){
        if (num % i ===0){
            return 0;
        }
    }
    return 1;
};

/** using an arrow function */
const isPrimeArrow = num => {
    if (num < 2){
        return 0;
    }

    for (let i=2; i<= Math.sqrt(num); i++){
        if (num % i ===0){
            return 0;
        }
    }
    return t1;
};

function printPrimes(count, isPrimeFunction) {
    let primes = [];
    let num = 2;
    while (primes.length < count) {
        if (isPrimeFunction(num)) {
            primes.push(num);
        }
        num++;
    }
    return primes;
}


console.log("using Regular Function:", printprimes(100,isPrimeRegular));
console.log("using Anonymous Function:", printprimes(100, isPrimeAnonymous));
console.log("using Arrow Function:",printprimes(100,isPrimeArrow));
