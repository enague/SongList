class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			songs: this.props.songs
		}
		this.handleSearch= this.handleSearch.bind(this)
		this.handleAdd= this.handleAdd.bind(this)
		this.postSongs= this.postSongs.bind(this)
		this.getSongs= this.getSongs.bind(this)
	}


	handleSearch(value) {
		for(var i= 0; i < this.props.songs.length; i++) {
			if(this.props.songs[i].title.toUpperCase() === value.toUpperCase()) {
				console.log('this hits',this.props.songs[i])
				this.setState({
					songs: [this.props.songs[i]]
				})
			}
		}

		this.getSongs(value)
	}

	handleAdd(value) {
		var splitSong= value.split(',')
		var newSong= {'title': splitSong[1], 'artist': splitSong[0]};
		this.props.songs.push(newSong)
		console.log(this.props.songs)

		this.postSongs(value)
	}

	postSongs(value){
		axios.post('/songs', {
			params: {value}
		})
		.then((response)=> {
			console.log(response)
		})
		.catch((err) => {
			console.log(err)
		})

	}

	getSongs(value) {
		axios.get('/songs', {
			params: {value}
		})
		.then((response)=> {
			console.log(response)
		})
		.catch((err) => {
			console.log(err)
		})
	}


	render() {
		return(
			<div>	
				<Add handleAdd={this.handleAdd} />
				<Search handleSearch={this.handleSearch}/>
				<SongList songs={this.state.songs} />
				<button onClick={()=> {window.location.reload()}}>Refresh Page</button>
			</div>
		)
	}
}
