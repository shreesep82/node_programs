
const request = require('request')

// http://services.groupkt.com/state/get/IND/JK

function getStateInfo(country, state, callback) {
    request(`http://services.groupkt.com/state/get/${country}/${state}`, (err, res, body) => {
        if(err) {
		        callback('error occured while fetching country\'s state info');
	      }
	      else if(res.statusCode === 200) {
		         //console.log(JSON.stringify(body, undefined, 8));
		         callback(null, JSON.parse(body).RestResponse.result.capital);
	      }
    })
}

module.exports.getStateInfo = getStateInfo;
