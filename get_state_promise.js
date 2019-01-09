
const request = require('request')

// http://services.groupkt.com/state/get/IND/JK

function getStateInfo(country, state) {
  return new Promise( (resolve, reject) => {
      request(`http://services.groupkt.com/state/get/${country}/${state}`, (err, res, body) => {
          if(err) {
  		        reject('error occured while fetching country\'s state info');
  	      }
  	      else if(res.statusCode === 200) {
  		         //console.log(JSON.stringify(body, undefined, 8));
  		         resolve(JSON.parse(body).RestResponse.result.capital);
  	      }
      })
  });
}

module.exports.getStateInfo = getStateInfo;
