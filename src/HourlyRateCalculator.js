import React, {useState, useEffect} from "react";
import Clock from "./timer.svg";
import Rate from "./rate.svg";
import Clip from "./clipboard.svg";

function HourlyRateCalculator() {
	const [hours, setHours] = useState("");
	const [minutes, setMinutes] = useState("");
	const [rate, setRate] = useState("");
	const [total, setTotal] = useState(null);

	useEffect(() => {
		const totalHours = parseFloat(hours || 0) + parseFloat(minutes || 0) / 60;
		const totalAmount = totalHours * parseFloat(rate || 0);
		setTotal(totalAmount);
	}, [hours, minutes, rate]);

	const resetValues = () => {
		setHours("");
		setMinutes("");
		setRate("");
		setTotal(null);
	};

	const copyToClipboard = () => {
		if (total !== null) {
			navigator.clipboard.writeText(total.toFixed(2));
			alert("Total amount copied to clipboard!");
		}
	};

	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();

	return (
		<div className="all-items">
			<div className="all-input">
				<div className="input">
					<div className="icons">
						{/* <img src={Clock} /> */}
						<label className="titles">Hour</label>
					</div>
					<input
						type="number"
						pattern="[0-9]*"
						inputmode="numeric"
						placeholder="Hours worked"
						value={hours}
						onChange={(e) => setHours(e.target.value)}
					/>
				</div>

				<div className="input">
					<div className="icons">
						{/* <img src={Clock} /> */}
						<label>Minute</label>
					</div>
					<input
						type="number"
						pattern="[0-9]*"
						inputmode="numeric"
						placeholder="Minutes worked"
						value={minutes}
						onChange={(e) => setMinutes(e.target.value)}
					/>
				</div>
				<div className="input">
					<div className="icons">
						{/* <img src={Rate} /> */}
						<label>Hourly Rate</label>
					</div>
					<input
						type="number"
						pattern="[0-9]*"
						inputmode="numeric"
						placeholder="Hourly rate"
						value={rate}
						onChange={(e) => setRate(e.target.value)}
					/>
				</div>
			</div>

			<div>
				<div className="copyearnings" onClick={copyToClipboard}>
					<div className="icons">
						<label className="totallabel">Total Earnings</label>
						<a>
							<img src={Clip} />
						</a>
					</div>

					{total !== null && <div className="total">${total.toFixed(2)}</div>}
				</div>

				<button onClick={resetValues}>Reset</button>
			</div>

			<p className="footer">
				CopyRight © {currentYear} | Developed By{" "}
				<a target="blank" href="https://www.auvik.me/">
					Auvik Mir
				</a>
				, North Carolina
			</p>
		</div>
	);
}

export default HourlyRateCalculator;
