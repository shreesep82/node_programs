
console.log('this script should have command line args');

console.log(process.argv);

if(process.argv[2] === 'cmd') {
	console.log('cmd is available');
}
