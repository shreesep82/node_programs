
const request = require('supertest');

var app = require('./server').app
var expect = require('expect')

// use mocha test function 'it' to test express app
describe('app1 and app2', () => {
it('Testing express app -- 1', (done) => {
  request(app)
    .get('/')
    .expect('Hi man')
    .end(done)
})


it('Testing express app -- 2', (done) => {
  request(app)
    .get('/ep1')
    .expect(404)
    .expect({
      error : 'Page cannot be displayed'
    })
    .end(done)
})
});

describe('app3', () => {
it('Testing express app -- 3', (done) => {
  request(app)
    .get('/ep2')
    .expect(200)
    .expect((res) => {
        expect(res.body).toEqual({
            data : 'This is the data'
        })
      })
    .end(done)

})
});
