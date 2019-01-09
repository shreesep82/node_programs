
const request = require('request')

console.log('using callbacks here');

function executeRestApi(url, callback) {
        request(url, (error, response, body) => {
                if(error) {
                        throw error;
                }

                console.log(response);
                setTimeout(callback, 2000, response, body);
        });
}

try {
        executeRestApi('https://reqres.in/api/users?page=2', (response, body) => {
                console.log(response.statusCode);
                if(response.statusCode === 200) {
                        console.log('output from url : ', body);
                }
        });
}
catch(error) {
        console.log('Error occured : ', error);
}
