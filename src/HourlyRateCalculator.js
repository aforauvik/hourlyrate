import React, {useState, useEffect} from "react";

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

	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();

	return (
		<div className="all-items">
			<div className="all-input">
				<div className="input">
					<label className="titles">Hour</label>
					<input
						type="number"
						placeholder="Hours worked"
						value={hours}
						onChange={(e) => setHours(e.target.value)}
					/>
				</div>

				<div className="input">
					<label>Minute</label>
					<input
						type="number"
						placeholder="Minutes worked"
						value={minutes}
						onChange={(e) => setMinutes(e.target.value)}
					/>
				</div>
				<div className="input">
					<label>Hourly Rate</label>
					<input
						type="number"
						placeholder="Hourly rate"
						value={rate}
						onChange={(e) => setRate(e.target.value)}
					/>
				</div>
			</div>

			<div>
				<label className="totallabel">Total Earnings</label>
				{total !== null && <div className="total">${total.toFixed(2)}</div>}
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
