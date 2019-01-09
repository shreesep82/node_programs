
const request = require('request')

// http://services.groupkt.com/state/get/IND/all

function getCountryInfo(country, state, callback) {

    request(`http://services.groupkt.com/state/get/${country}/all`, (err, res, body) => {
        if(err) {
		        callback('error occured while fetching country info');
	      }
	      else if(res.statusCode === 200) {
		         //console.log(JSON.stringify(body, undefined, 8));
             var stateFound = false;
             var si;
             (JSON.parse(body).RestResponse.result).forEach((stateInfo) => {
                if(stateInfo.abbr === state) {
                    stateFound = true;
                    si = stateInfo;
                    return;
                }
             });

             if(stateFound) {
                callback(null, si);
             }
             else {
               callback(null, null)
             }


	      }
    })
}

module.exports.getCountryInfo = getCountryInfo;
