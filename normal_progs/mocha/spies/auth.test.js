var auth = require('./auth')
var expect = require('expect')

var rewire = require('rewire')
var auth = rewire('./auth')

describe('Test authentication', () => {

it('Inserting an entry into database', () => {
  var database = {
    insert : expect.createSpy()
  }

  auth.__set__('database', database);
  auth.authenticate({login: 'shree', passwd: '123'})
  expect(database.insert).toHaveBeenCalled({login: 'shree', passwd: '123'})
})


})
