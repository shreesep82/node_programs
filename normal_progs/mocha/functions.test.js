
const funs = require('./functions');
const expect = require('expect')

it('checking if input is a number -- 1', () => {
  if(! funs.checkIfNumber(50)) {
    throw new Error('Not a number');
  }
});


it('checking if input is a number -- 2', () => {
  if(! funs.checkIfNumber('7')) {
    throw new Error('Not a number');
  }
});

it('checking if input is a number -- 3', () => {
  var isNumber = funs.checkIfNumber('8');
  expect(isNumber).toNotBe(true)
});

it('checking if input is a number -- 4', () => {
  expect(funs.checkIfNumber(8)).toBeA('string ')
})

it('checking if input is a number -- 5', () => {
    expect(funs.checkIfNumber(8)).toBe(true)
})

it('checking if object is same -- 6', () => {
    expect({'name' : 'shree', 'age' : '36'}).toEqual({'name' : 'shree', 'age' : '36'})
})

it('checking if object is not same -- 7', () => {
    expect({'name' : 'shree', 'age' : '36'}).toNotEqual({'name' : 'shreekanth', 'age' : '36'})
})

it('checking if object has a property -- 8', () => {
    expect({'name' : 'shree', 'age' : '36'}).toInclude({'age' : '36'})
})

it('checking if object has a property -- 9', () => {
    expect({'name' : 'shree', 'age' : '36'}).toExclude({'age' : '36'})
})

it('Check if number Async', (done) => {
  //console.log('check if number Async callback')
  //done();
  funs.checkIfNumberAsync(45, (isNumber) => {
    //console.log('checkIfNumberAsync async callback')
    expect(isNumber).toBe(false).toBeA('boolean')
    done();
  })

})
