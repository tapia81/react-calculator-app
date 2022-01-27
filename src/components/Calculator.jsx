import { useState } from 'react';
function Calculate() {
	const [ valueOne, setValueOne ] = useState(0);
	const [ valueTwo, setValueTwo ] = useState(0);
	const [ sumValue, setSumValue ] = useState(valueOne + valueTwo);
	const [ differenceValue, setDifferenceValue ] = useState(valueOne - valueTwo);
	const [ productValue, setProductValue ] = useState(valueOne * valueTwo);
	const [ divValue, setDivValue ] = useState(0);

	function total() {
		setSumValue(() => valueOne + valueTwo);
		setDifferenceValue(() => valueOne - valueTwo);
		setProductValue(() => valueOne * valueTwo);
		setDivValue(() => valueOne / valueTwo);
	}

	const keyBoardSubmit = (event) => {
		if (event.key === 'Enter') {
			total();
		}
	};

	return (
		<div className="container">
			<h1>Add with React!</h1>
			<form className="add">
				<input
					type="text"
					name="value1"
					placeholder="Enter First Value"
					onChange={(event) => setValueOne(+event.target.value)}
					onKeyPress={keyBoardSubmit}
				/>

				<span> + </span>

				<input
					type="text"
					name="value2"
					placeholder="Enter Second Value"
					onChange={(event) => setValueTwo(+event.target.value)}
					onKeyPress={keyBoardSubmit}
				/>

				<span> = </span>

				<div>
					<h3>Addition results go here!</h3>
					<p>Sum: {sumValue}</p>
					<p>{setSumValue}</p>
					<p>Difference: {differenceValue}</p>
					<p>{setDifferenceValue}</p>
					<p>Product: {productValue}</p>
					<p>{setProductValue}</p>
					<p>Quotient: {divValue}</p>
					<p>{setDivValue}</p>
				</div>
			</form>

			<div className="button-row">
				<button onClick={total}>Total</button>
			</div>
		</div>
	);
}

export default Calculate;
