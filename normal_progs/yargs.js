const yargs = require('yargs');

yargs.options(
	{
		a : {
			demand : true,
			alias : 'address',
			description : 'address which will be converted to latitude/longitude'
		}
	}

)

.help()
.alias('help', 'help me')
.argv

.version()
.alias('version', 'version info')

//console.log(yargs);
//console.log(yargs.argv);
