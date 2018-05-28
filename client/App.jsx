class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}


	render() {
		return(
			<div>	
				<h1> hi from App </h1>

				<SongList songs={this.props.songs} />
			</div>
		)
	}
}
