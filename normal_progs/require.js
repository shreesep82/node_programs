const mod = require('./require_modules')

mod.func1();

mod.func2(30);

console.log(`func3 returned ${mod.func3(20)}`);

mod.func4(30, 40);

console.log('global obj value : ', mod.gObj);

console.log('uninitialized global obj : ', mod.gOjb2);

const {func1, func2} = require('./require_modules');

func1();

func2(400);


