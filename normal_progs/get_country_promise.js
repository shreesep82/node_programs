
const request = require('request')

// http://services.groupkt.com/state/get/IND/all

function getCountryInfo(country, state) {

  return new Promise( (resolve, reject) => {
      request(`http://services.groupkt.com/state/get/${country}/all`, (err, res, body) => {
          if(err) {
  		        reject('error occured while fetching country info');
  	      }
  	      else if(res.statusCode === 200) {
  		         //console.log(JSON.stringify(body, undefined, 8));

               if(! (JSON.parse(body).RestResponse.result).length) {
                 reject('Looks like invalid country code');
               }

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
                  resolve(si);
               }
               else {
                 reject('State not found')
               }


  	      }
      })
  });
}

module.exports.getCountryInfo = getCountryInfo;
