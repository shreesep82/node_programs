var fs = require('fs')

var jobj = {
  "name" : "some name",
  "age" : 25
};

console.log(jobj);

var json_str = JSON.stringify(jobj);
console.log('json string : ', json_str);

console.log('json string to json obj : ', JSON.parse(json_str));

// modify json_str
jobj.lastname = "kan";
json_str = JSON.stringify(jobj);

fs.writeFileSync('file.json', json_str);

console.log('read file.json : ', `${fs.readFileSync('file.json')}`);
