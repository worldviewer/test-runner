import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tests: [
				{ description: "commas are rotated properly",          run: this.generateDummyTest() },
				{ description: "exclamation points stand up straight", run: this.generateDummyTest() },
				{ description: "run-on sentences don't run forever",   run: this.generateDummyTest() },
				{ description: "question marks curl down, not up",     run: this.generateDummyTest() },
				{ description: "semicolons are adequately waterproof", run: this.generateDummyTest() },
				{ description: "capital letters can do yoga",          run: this.generateDummyTest() }
			]
		};
	}

	callback() {
		console.log('success');
	}

	generateDummyTest() {
		var delay = 7000 + Math.random() * 7000;
		var testPassed = Math.random() > 0.5;

		return function(callback) {
			setTimeout(function() {
				callback(testPassed);
			}, delay);
		};
	}

	render() {
		console.log(this.state.tests);
		this.state.tests.forEach((test) => test.run(this.callback));

		return (
			<div className="App">

			</div>
		);
	}
}

export default App;
