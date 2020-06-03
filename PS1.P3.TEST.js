const {describe, it} = require('mocha'); //mocha.js.org
const {expect} = require('chai');

const {splitter, lambda1, lambda2} = require('./PS1.P3');

describe('PS1.P3 TEST', () => {
    it(`should return the string split on every 'c' character (including 'c')`, function(){
        let split1 = splitter('supercalifragilisticexpialidocious', lambda1);
        expect(split1).to.have.eql(['super','califragilisti','cexpialido','cious']);
    });
    it(`should return the originalString, modifiedString, numberReplaces, length`, function(){
        let split2 = splitter('supercalifragilisticexpialidocious', lambda2);
        expect(split2).to.have.property('originalString').with.lengthOf(34);
        expect(split2).to.have.property('modifiedString').with.lengthOf(34);
        expect(split2).to.have.property('numberReplaced').to.have.equal(3);
        expect(split2).to.have.property('length').to.have.equal(34);
    });
})
