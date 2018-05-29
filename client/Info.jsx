class Info extends React.Component {
	constructor(props) {
		super(props);
		this.state= {
			show: false,
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
		return (
			<div>
				<div><b>Artist:</b>{this.props.songInfo.song.artist}</div>
				<div onClick={()=>{this.listen()}}> {this.state.listen ? 'To Listen': 'Listened'} </div>
			</div>
		)
	}
}