import React, { Component } from 'react';

class TestResults extends Component {
	constructor(props) {
		super(props);

		this.props = props;
	}

	render() {
		return (
			<div className="TestResults">
				<p>Running: {this.props.running}</p>
				<p>Passed: {this.props.passed}</p>
				<p>Failed: {this.props.failed}</p>

				{!this.props.running && this.props.passed + this.props.failed === this.props.testNum ?
					(<p>FINISHED!</p>) :
					null
				}
			</div>
		)
	}
}

export default TestResults;
