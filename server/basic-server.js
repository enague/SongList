var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': false}));
app.use(express.static('compiled'));


app.post('/songs', (req,res) => {
	var songTitle= req.body.params.value;

	res.send()
})


app.get('/songs', (req,res) => {
	var songIWant= req.query.value;
	res.send()
})




app.listen(3000, () => {console.log('SongList listening at 3000')});