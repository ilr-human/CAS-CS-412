const app = require('../app')
const chai = require('chai');
const mocha = require('mocha');
const chaiHttp = require('chai-http'); //has a dependency on mocha
const {expect} = chai;
const {describe} = mocha;

chai.use(chaiHttp);

describe('COVID API', () => {
    it('should return 200 success code', function (done) {
        chai.request(app)
            .get('/ps4/ps4Route')
            .end((err, response) => {
                expect(response).to.have.status(200);
                done();
            })
    })
})
