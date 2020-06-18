const app = require('../app')
const chai = require('chai');
const mocha = require('mocha');
const chaiHttp = require('chai-http'); //has a dependency on mocha
const {expect} = chai;
const {describe} = chai;

chai.use(chaiHttp);

describe('COVID API', () => {
    it ('should return the number of current confirmed cases', function (done) {
        chai.request(app)
            .get('/ps4Route')
            .end((err, response) => {
                expect(response).to.be.html;
                done();
            })
    })
})
