import { useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<button onClick={() => setCount(count - 1)}>Decrease</button>
			<button onClick={() => setCount(count + 1)}>Increase</button>

			<h2>{count}</h2>
		</div>
	);
}

export default Counter;
