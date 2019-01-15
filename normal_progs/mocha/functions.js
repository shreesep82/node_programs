module.exports.checkIfNumber = (number) => {
	if(typeof number === 'number') {
		return true;
	}

	return false;
}

module.exports.checkIfNumberAsync = (number, callback) => {
	setTimeout( () => {
		callback(typeof number === 'number')
	}, 1000)
}
