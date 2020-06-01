const {describe, it} = require('mocha'); //mocha.js.org
const {expect} = require('chai');

const {alphabetical} = require('./PS1.P1');

describe('PS1.P1 TEST', () => {
    it(`should return the string in alphabetical order`, function(){
        let a = alphabetical('supercalifragilisticexpialidocious');
        expect(a).to.be.equal('aaacccdeefgiiiiiiillloopprrssstuux');
    });
    it(`should return the string in alphabetical order, no numbers, no punctuations, and no spaces`, function(){
        let a = alphabetical('isabella rocha... 123');
        expect(a).to.be.equal('aaabcehillors');
    });
    it(`should return the string in alphabetical order, no numbers, no punctuations, and no spaces`, function(){
        let a = alphabetical('no corona virus!');
        expect(a).to.be.equal('acinnooorrsuv');
    });
})