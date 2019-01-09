console.log(exports)
console.log(__filename)
console.log(__dirname)

var jobj = {
  "file" : __filename,
  "dir" : __dirname
}

console.log(jobj);

debugger;

var jarray = []

jarray.push(jobj)

jarray.push({"file" : "myfile", "dir" : "some dir"});

debugger;

console.log(jarray)

const {func1} = require('./debug_require')

func1();
