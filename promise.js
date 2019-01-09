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

//const request = require('request');
const getCI = require('./get_country_promise')
const getSI = require('./get_state_promise')
const country = argv.country;
const state = argv.state;


console.log('country code : ', country)
//console.log('state code : ', state)
/*
getCI.getCountryInfo(country, state)
.then( (resolvedValue) => {
	console.log('state is : ', resolvedValue)
}, (errorMsg) => {
	console.log(errorMsg);
});
*/

/*
getCI.getCountryInfo(country, state)
	.then( (resolvedState) => {
		console.log('resolved state is : ', resolvedState);
		getSI.getStateInfo(country, state)
			.then( (resolvedCapital) => {
				console.log('Capital city : ', resolvedCapital);
			}, (errorMsg) => {
	 			console.log(errorMsg);
	 		})
	}, (errorMessage) => {
				console.log('Error occured : ', errorMessage);
	});
*/

getCI.getCountryInfo(country, state)
	.then( (resolvedState) => {
		console.log('resolved state is : ', resolvedState);
		getSI.getStateInfo(country, state)
			.then( (resolvedCapital) => {
				console.log('Capital city : ', resolvedCapital);
			})
	})
	.catch( (err) => {
		console.log('Error occured : ', err)
	})
