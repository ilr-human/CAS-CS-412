const {describe, it} = require('mocha'); //mocha.js.org
const {expect} = require('chai');

const {wordSplitter} = require('./PS2.P2');

describe('PS2.P2 TEST', () => {
    it(`should yield each word from the string`, function(){
        const wS = wordSplitter('All I know is something like a bird within her sang');
        let result = wS.next();
        let test = [];
        while(!result.done){
            test.push(result.value);
            console.log(`${result.value}`);
            result = wS.next();
        }
        expect(test).to.be.eql(['All','I','know','is','something','like','a','bird','within','her','sang']);
    });
})
