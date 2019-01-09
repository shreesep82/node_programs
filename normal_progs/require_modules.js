
console.log('this file will be "require"d by module.js');

function func1() {
  console.log('this is func1');
}

var gObj2;

module.exports = {
  func1,

  func2 : (a) => {
    console.log(`you passed ${a}`);
  },

  func3 : param => param + 1,

  func4 : (a, b) => {
    console.log('sum is ', a + b)
  },

  gObj : 25,

  gObj2
}
