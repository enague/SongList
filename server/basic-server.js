var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('../db/database.js');
var request = require('request');
var promise =require('promise');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': false}));
app.use(express.static('compiled'));

//helper function to get songs from API
var getSongsFromAPI= function(songName) {
	var options = {
		url: '',// url to api with key and songName
		headers: {
			'User-Agent': 'request'
		}
	}	

	return new Promise((resolve, reject)=> {
		request(options, (err, res, body) => {
			if(err) reject(err);
			else resolve(body);
		})
	})

}


app.post('/songs', (req,res) => {
	var songTitle= req.body.params.value;

	getSongsFromAPI(songTitle)
	.then((data) => {
		db.save(JSON.parse(data));
		res.send()
	})
	.catch((error)=> {
		console.log(error);
		res.send();
	})
})


app.get('/songs', (req,res) => {
	var songIWant= req.query.value;
	db.Song.find()
	.then((data)=> {
		res.send(data);
	})
	.catch((error)=> {
		console.log(error);
	})
})




app.listen(3000, () => {console.log('SongList listening at 3000')});