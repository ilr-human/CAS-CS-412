const {describe, it} = require('mocha'); //mocha.js.org
const {expect} = require('chai');

const {cube} = require('./PS2.P3');

describe('PS2.P3 TEST', () => {
    it(`should return each number of the array cubed`, function(){
        let array = [1,2,3,4,5,6,7];
        console.log(`result: ${array.map(cube)}`); //single line used for calling the function
        let test = array.map(cube);
        expect(test).to.be.eql([1,8,27,64,125,216,343]);
    });
})