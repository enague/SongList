class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			songs: this.props.songs
		}
		this.handleSearch= this.handleSearch.bind(this)
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


	render() {
		return(
			<div>	
				<Search handleSearch={this.handleSearch}/>
				<SongList songs={this.state.songs} />
			</div>
		)
	}
}
