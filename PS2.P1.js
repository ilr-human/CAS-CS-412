function * F (n) {
    const isInfinite = n === undefined;
    let current = 0;
    let next = 1;
    while (isInfinite || n--) {
        yield current;
        [current, next] = [next, current + next];
    }
}

let array = [];
const fibonacci = F(4);
let result = fibonacci.next();
while(!result.done){
    console.log(`Result: ${result.value}`);
    array.push(result.value);
    result = fibonacci.next();
}

function * E (array){
    let current = 0;
    while(current < array.length){
        if (array[current] % 2 == 0){
            yield array[current];
        }
        current = current + 1;
    }
}

const even = E(array);
let output = even.next();
while(!output.done){
    console.log(`Output: ${output.value}`);
    output = even.next();
}

module.exports = {F};