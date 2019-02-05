const expect = require('expect');
const request = require('supertest');

const {app} = require('./rest_server');
const {docStruct} = require('./rest_server')

// make sure to empty mongo db collection in the begining
beforeEach((done) => {

	// delete all docs
	docStruct.deleteMany({}, (err) => {
		if(err) {
			return console.log('find and remove: ', err);
		}

		console.log('user deleted');
		done();
	});

	var doc = new docStruct({
		name: 'new_name3',
		age: 38
	})

	doc.save((err, res) => {
		if(err) return console.log('insert error: ', err);

		console.log('inserted doc: ', JSON.stringify(res));
	})

})

describe('Test rest server end points by getting some data', () => {

  it('test /rp_get_api1', (done) => {

    //send request and check it's response
    request(app)
      .get('/rp_get_api1')
      .expect(200)
      .expect((res) => {
					//sleep.sleep(5);
      })
      .end((err, res) => {
        if(err) return done(err);

				console.log('res.body: ', res.body);
				var docs_array = res.body;
				expect(docs_array[0].name).toBe('new_name3')

				docStruct.find().then((docs) => {
					console.log('docs in db: ', docs)
					expect(docs.length).toBe(1)
					expect(docs[0].name).toBe('new_name3')
					done();
				})
				.catch((err) => {
					done(err);
				})

      })

  })

})
