
var json_array = [];

var jobj = {
  "name" : "shree",
  "age" : 25
};

// add json elements to json array
json_array.push(jobj);

console.log('js array : ', json_array);

// modify jobj and add to json_array again
var jobj2 = {
  "name" : "kan",
  "age" : 35
};

json_array.push(jobj2);

console.log('js array : ', json_array);

var filtered_json_array = json_array.filter( jobj_elem => jobj_elem.name === 'kan')

console.log('filtered_json_array : ', filtered_json_array);
