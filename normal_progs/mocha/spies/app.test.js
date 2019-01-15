var expect = require('expect');

var rewire = require('rewire');

var app = rewire('./app');

describe('Deleting user from db', () => {

var db = {
	deleteUser : expect.createSpy()
};

app.__set__('db', db);

it('delete user', () => {
	app.deleteFromDb({login: 'shree', passwd : '123'});
	expect(db.deleteUser).toHaveBeenCalled({login: 'shree', passwd : '123'});
});

});
