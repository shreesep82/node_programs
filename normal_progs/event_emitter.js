var events = require('events')
var eventEmitter = new events.EventEmitter();
var myevent = { "key" : "k1", "value" : "v1" };

eventEmitter.on('some_event', myevent => {
	console.log('event fields: ', myevent.key);
});

function func(value, callback) 
{
	console.log(value);
	setImmediate(callback);
	eventEmitter.emit('some_event', myevent)
	process.nextTick( () => {
		console.log('This log should come after ', 'some log');
	})
	console.log('some log');
}


func('shree', () => {
	console.log('this is asynchronous callback');
});


eventEmitter.on('some_event', (myevent, value) => {
	console.log('event fields: ', myevent.key);
	console.log('event fields: ', value);
});

//eventEmitter.emit('some_event', myevent)
eventEmitter.emit('some_event', myevent, 20)
