import { useState } from "react";

import "./App.css";

function App() {
	const [count, setCount] = useState(1);

	return (
		<div className="App">
			<h3>React Example</h3>
			<h1>{count}</h1>
			<button onClick={() => setCount(2)}>Click</button>
		</div>
	);
}

export default App;
