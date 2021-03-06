const expect = require('expect');
const request = require('supertest');

const {app} = require('./rest_server');
const {docStruct} = require('./rest_server')
var {ObjectId} = require('mongodb');

var _id = new ObjectId();

var doc = new docStruct({
        _id : _id,
        name: 'new_name3',
        age: 38
})

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

	doc.save((err, res) => {
		if(err) return console.log('insert error: ', err);

		console.log('inserted doc: ', JSON.stringify(res));
	})

})

describe('Test rest server end points by getting some data using id as param', () => {

  it('test /rp_get_ap1/:id (exact id)', (done) => {

        console.log('_id: ', `${_id.toHexString()}`);
    //send request and check it's response
    request(app)
      .get(`/rp_get_ap1/${_id.toHexString()}`)
      .expect(200)
      .expect((res) => {
      })
      .end((err, res) => {
        if(err) return done(err);

                console.log('res.body: ', res.body);
                var doc = res.body;
                expect(doc.name).toBe('new_name3')

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

  it('test /rp_get_ap1/:id (invalid id)', (done) => {

    //send request and check it's response
    request(app)
      .get(`/rp_get_ap1/12345`)
      .expect(400)
      .expect((res) => {
      })
      .end((err, res) => {
        if(err) return done(err);

                console.log('res.body: ', res.body);
                var body = res.body;
                expect(body.err).toBe('Invalid id')

                done();
        })

  })

})
