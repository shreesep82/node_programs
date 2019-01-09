var express = require('express');
var hbs = require('hbs');

const app = express();

// consider port from env
var port = process.env.PORT || 5004;

// set templating engine
app.set('view engine', 'hbs');

// access public directory files like .html, images, .js and so on
app.use(express.static(__dirname + '/public'));

// register partials using hbs
hbs.registerPartials(__dirname + '/views/partials');

// register helper functions
hbs.registerHelper('h5Content', () => {
	return 'Some content for h5 tag'
})

// routes
app.get('/', (req, res) => {
	console.log('got request at /. ', req.route);
	res.send({
		data: req.route
	});
});

app.get('/some', (req, res) => {
	console.log('visiting some')
	res.render('some.hbs', {
		h2Content : 'This is h2 header content',
		h1Content : 'This is h1 header content',
		h3Content : 'This is h3 header content'
	})
})


// web server listens here
app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
