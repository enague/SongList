class SongListEntry extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			listen: false
		}
		this.listen= this.listen.bind(this)
	}

	listen() {
		this.setState(prevState => ({
			listen: !prevState.listen
		}));
	}

	render() {
		return(
			<div>
				<div>{this.props.song.artist}:</div>
				<div>{this.props.song.title}</div>
				<div onClick={()=>{this.listen()}}> {this.state.listen ? 'To Listen': 'Listened'} </div><br/>
			</div>
		)
	}
}