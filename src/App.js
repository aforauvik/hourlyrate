import "./styles.css";
import React from "react";
import HourlyRateCalculator from "./HourlyRateCalculator";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Hour To Money Calculator</h1>
				<p>Calculate your earnings</p>
			</header>

			<HourlyRateCalculator />
		</div>
	);
}

export default App;
