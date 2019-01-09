
var express = require('express')

var app = express();

app.use(express.static(__dirname))

var reqCount = 0;

// This middleware counts number of requests
app.use((req, res, next) => {
  console.log('Got request from ', req.url);
  console.log('request method : ', req.method);
  reqCount++;
  next();
})


app.use((req, res, next) => {
  console.log('second middleware');
  if(req.url == '/about') {
    // block this request
    res.render('some.hbs', {
      data : 'data'
    });
    return;
  }
  next();
})


app.get("/", (req, res) => {
  console.log('got / request');
  res.send('Hi. Welcome!!!')
})

app.get("/about", (req, res) => {
  console.log('got /about request');
  res.send('Hi. This is <i>about</i>');
})

app.listen(5004, () => {
  console.log('server listening on 5004');
})
