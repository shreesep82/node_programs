const expect = require('expect');
const request = require('supertest');

const {app} = require('./rest_server');
const {docStruct} = require('./rest_server')

var sleep = require('sleep')

// make sure to empty mongo db collection in the begining
beforeEach((done) => {
	docStruct.deleteMany({}, (err) => {
		if(err) {
			return console.log('find and remove: ', err);
		}

		console.log('user deleted');
		done();
	});

})

describe('Test rest server end points by posting some data', () => {
  it('test /rp_api1', (done) => {


    //send request and check it's response
    request(app)
      .post('/rp_api1')
      .send({name : 'new_name2'})
      .expect(200)
      .expect((res) => {
        expect(res.body.name).toBe('new_name2')
      })
      .end((err, res) => {
        if(err) return done(err);

			docStruct.find().then((docs) => {
				console.log('docs in db: ', docs)
				expect(docs.length).toBe(1)
				expect(docs[0].name).toBe('new_name2')
				done();
			})
			.catch((err) => {
				done(err);
			})

      })


  })

})
