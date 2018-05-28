class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state= {
			value: ''
		}
		this.getValueFromSearch= this.getValueFromSearch.bind(this)
	}

	getValueFromSearch(e) {
		this.setState({
			value: e.target.value
		})
	}

	render() {
		return (
			<div>
				<input type='text' value={this.state.value} onChange={this.getValueFromSearch}/>
				<button className='search' onClick={()=>{this.props.handleSearch(this.state.value)}}>Search</button>
			</div>
		)
	}
}