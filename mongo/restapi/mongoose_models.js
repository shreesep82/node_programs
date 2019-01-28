const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mongoose_some_db');

// define structure of data to be written into mongodb
var docStruct = mongoose.model('some_ds', {
	name : {
		type : String,
    required : true,
    minlength : 5
	},
	age : {
		type : Number,
    default : 38
	}

});

module.exports.docStruct = docStruct;
