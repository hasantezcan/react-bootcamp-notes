import "./App.css";

import { useState } from "react";
import Title from "./components/Title";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<h1>{count}</h1>
			<button onClick={() => setCount(count - 1)}>Decrease</button>
			<button onClick={() => setCount(count + 1)}>Increase</button>

			<hr />
			<Title text={count < 5 ? "Selam ben Title component" : "Yeni Başlık"} />
		</div>
	);
}

export default App;
