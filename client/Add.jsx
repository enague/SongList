class Add extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		}
		this.getValueFromAdd= this.getValueFromAdd.bind(this)
	}

	getValueFromAdd(e) {
		this.setState({
			value: e.target.value
		})
	}

	render () {
		return (
			<div>
				<input text="type" onChange={this.getValueFromAdd} />
				<button onClick={()=> {this.props.handleAdd(this.state.value)}}>Add</button>
			</div>
		)
	}
}