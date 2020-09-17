const app = require('../src/app')
const supertest = require('supertest');

describe('App', () => {
    it('app router working', () => {
        let username = 'dog';
        supertest(app)
            .post('/friend/all')
            .send({"username":username})
            .expect(200);
    });
});