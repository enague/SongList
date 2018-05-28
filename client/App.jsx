class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			songs: this.props.songs
		}
		this.handleSearch= this.handleSearch.bind(this)
		this.handleAdd= this.handleAdd.bind(this)
	}


	handleSearch(value) {
		for(var i= 0; i < this.props.songs.length; i++) {
			if(this.props.songs[i].title.toUpperCase() === value.toUpperCase()) {
				this.setState({
					songs: [this.props.songs[i]]
				})
			}
		}
	}

	handleAdd(value) {
		var splitSong= value.split(',')
		console.log(splitSong)
		var newSong= {'title': splitSong[1], 'artist': splitSong[0]};
		this.props.songs.push(newSong)
		console.log(this.props.songs)
	}


	render() {
		return(
			<div>	
				<Add handleAdd={this.handleAdd} />
				<Search handleSearch={this.handleSearch}/>
				<SongList songs={this.state.songs} />
			</div>
		)
	}
}
