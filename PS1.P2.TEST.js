const {describe, it} = require('mocha'); //mocha.js.org
const {expect} = require('chai');

const {evaluate, getOperator} = require('./PS1.P2');

describe('PS1.P2 TEST', () => {
    it(`should return the summation of both numbers`, function(){
        const expression = '4+2';
        let operator = evaluate(expression);
        console.log(`${expression} = ${operator(Number(expression.charAt(0)), Number(expression.charAt(2)))}`);
        let summation = operator(Number(expression.charAt(0)), Number(expression.charAt(2)));
        expect(summation).to.be.equal(6);
    });
    it(`should return the product of both numbers`, function(){
        const expression = '5*7';
        let operator = evaluate(expression);
        console.log(`${expression} = ${operator(Number(expression.charAt(0)), Number(expression.charAt(2)))}`);
        let product = operator(Number(expression.charAt(0)), Number(expression.charAt(2)));
        expect(product).to.be.equal(35);
    });
    it(`should return the difference of both numbers`, function(){
        const expression = '6-1';
        let operator = evaluate(expression);
        console.log(`${expression} = ${operator(Number(expression.charAt(0)), Number(expression.charAt(2)))}`);
        let difference = operator(Number(expression.charAt(0)), Number(expression.charAt(2)));
        expect(difference).to.be.equal(5);
    });
    it(`should return the divisor of both numbers`, function(){
        const expression = '9/2';
        let operator = evaluate(expression);
        console.log(`${expression} = ${operator(Number(expression.charAt(0)), Number(expression.charAt(2)))}`);
        let divisor = operator(Number(expression.charAt(0)), Number(expression.charAt(2)));
        expect(divisor).to.be.equal(4.5);
    });
})