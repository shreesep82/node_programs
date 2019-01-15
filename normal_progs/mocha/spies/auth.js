var database = require('./database');

module.exports.authenticate = (login, passwd) => {
	// if login, passwd satisfy rules, save them
  database.insert({login, passwd});
}
