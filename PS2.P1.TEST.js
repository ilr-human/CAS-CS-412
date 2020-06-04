const {describe, it} = require('mocha'); //mocha.js.org
const {expect} = require('chai');

const {F} = require('./PS2.P1');

describe('PS2.P1 TEST', () => {
    it(`should yield fibonacci numbers for the specified amount`, function(){
        let test = [];
        const fibonacci = F(4);
        let result = fibonacci.next();
        while(!result.done){
            test.push(result.value);
            result = fibonacci.next();
        }
        expect(test).to.be.eql([0,1,1,2]);
    });
})