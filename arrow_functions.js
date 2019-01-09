console.log('demo: arrow functions')

var jobj = {
  "name" : "kan",
  arrowFunc : () => {
    console.log('arrow func : ', this.name);
  },

  normalFunc() {
    console.log('normal func: ', this.name);
  }
}

jobj.arrowFunc();
jobj.normalFunc();
