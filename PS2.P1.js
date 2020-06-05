function * F (n) {
    let [val1, val2, result] = [1,1,0];
    yield 0;
    yield 1;
    yield 1;
    while (true){
        result = val1 + val2;
        [val1, val2] = [val2, result];
        yield result;
    }
}

function * E (n){
    while (true){
        let even = fibonacci.next().value;
        while (even % 2 != 0){
            even = fibonacci.next().value;
        }
        yield even;
    }
}

const fibonacci = F();
const even = E();
let result = fibonacci.next();
let count = 6;
let Fib = [];
let Even = []
while(count --> 0){
    Fib.push(result.value);
    Even.push(even.next().value);
    result = fibonacci.next();
}
console.log(`first 6 fibonacci numbers: ${Fib}`);
console.log(`first 6 even fibonacci numbers: ${Even}`);
