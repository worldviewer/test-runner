import React, { Component } from 'react';
import Test from './Test';
import TestResults from './TestResults';
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
			],

			testResults: [
				"Not Started Yet",
				"Not Started Yet",
				"Not Started Yet",
				"Not Started Yet",
				"Not Started Yet",
				"Not Started Yet"
			],

			disabled: false
		};

		this.startButtonClickHandler = this.startButtonClickHandler.bind(this);
		this.callback = this.callback.bind(this);
	}

	callback(testPassed, testNumber) {
		console.log(testNumber + ': ' + testPassed);

		this.setState({
			testResults: [
				...this.state.testResults.slice(0, testNumber),
				testPassed ? 'Passed' : 'Failed',
				...this.state.testResults.slice(testNumber+1)
			]
		});

		console.log(this.state);
	}

	generateDummyTest(testNumber) {
		var delay = 7000 + Math.random() * 7000;
		var testPassed = Math.random() > 0.5;

		return function(callback, testNumber) {
			setTimeout(function() {
				callback(testPassed, testNumber);
			}, delay);
		};
	}

	startButtonClickHandler(e) {
		console.log(this.state.tests);
		this.state.tests.forEach((test, testNumber) => test.run(this.callback, testNumber));

		this.setState({
			testResults: Array.from({length: 6}, el => 'Running'),
			disabled: true
		});

		console.log(this.state);
	}

	enableButton() {
		this.setState({
			disabled: false
		});
	}

	componentDidUpdate(prevProps, prevState) {
		if (!this.state.testResults.includes('Running') && this.state.disabled) {
			this.enableButton();			
		}
	}

	render() {
		return (
			<div className="App">
				<button id="start_button" onClick={this.startButtonClickHandler}
					disabled={this.state.disabled}>
					Start Tests
				</button>

				{this.state.tests.map((test, testNumber) => (
					<Test
						key={testNumber}
						state={this.state.testResults[testNumber]}
						description={this.state.tests[testNumber].description} />
				))}

				<TestResults
					passed={this.state.testResults.filter(el => el === 'Passed').length}
					failed={this.state.testResults.filter(el => el === 'Failed').length}
					running={this.state.testResults.filter(el => el === 'Running').length}
					testNum={this.state.tests.length} />
			</div>
		);
	}
}

export default App;
