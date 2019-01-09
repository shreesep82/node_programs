
console.log('this is debug_require.js file');

module.exports = {
  func1 : () => {
    console.log('this is func1 exported---1');
    debugger
    console.log('this is func1 exported---2');
  }
}
