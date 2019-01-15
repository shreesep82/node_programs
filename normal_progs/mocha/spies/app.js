var db = require('./db');

module.exports.deleteFromDb = (login, passwd) => {
	db.deleteUser({login, passwd});
}
