var mongoose = require('mongoose');
var db = mongoose.connection;
mongoose.connect('mongodb://localhost/songs');

var songSchema = mongoose.Schema({
	'title': String,
	'artist': String,
	'release_date': String
})

var Song = mongoose.model('Song', songSchema);

//helper function to save to db
var save = (songsArray) => {
	//iterate through songsArray
	for(var i = 0; i < songArray.length; i++) {

		//make a model of each
		var song = new Song({
			'title': songsArray[i].title,
			'artist': songsArray[i].artist,
			'release_date': songsArray[i].release_date
		})

		song.save(function(err,product) {
			console.log('save to Mongodb')
		})

	}
	//save to Mongodb
}

module.exports.Song = Song;
module.exports.save = save;
