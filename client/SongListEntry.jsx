class SongListEntry extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false
		}
		this.show= this.show.bind(this)
	}

	show() {
		this.setState(prevState => ({
			show: !prevState.show
		}));
	}

	render() {
		return(
			<div>
				<div onClick={()=>{this.show()}}>{this.props.song.title}</div>
				<div> {this.state.show ? <Info songInfo={this.props} />: null} </div><br />
			</div>
		)
	}
}