import React, { Component } from 'react';

class Test extends Component {
	constructor(props) {
		super(props);

		this.props = props;
	}

	render() {
		return (
			<div className="Test">
				<p>{this.props.description}: {this.props.state}</p>
			</div>
		)
	}
}

export default Test;
