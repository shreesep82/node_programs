
const yargs = require('yargs');

const argv =
yargs
.options({
	c : {
		demand : true,
		alias : 'country',
		description : 'Country code',
		string : true
	},
	s : {
		demand : true,
		alias : 'state',
		description : 'State code',
		string : true
	}
})
.argv;

const request = require('request');
const getCI = require('./getCountryInfo')
const getSI = require('./getStateInfo')
const country = argv.country;
const state = argv.state;


console.log('country code : ', country)
console.log('state code : ', state)

getCI.getCountryInfo(country, state, (errorMessage, stateInfo) => {
	if(errorMessage) {
		console.log(errorMessage);
	}
	else if(!stateInfo) {
		console.log('No state found');
	}
	else {
		console.log(`state info of ${state} : `, stateInfo);
		console.log('Getting state capital now');
		getSI.getStateInfo(country, state, (errorMessage, capital) => {
				if(errorMessage) {
						console.log(errorMessage)
				}
				else {
						console.log('Capital city of state is ', capital);
				}
		});
	}
});
