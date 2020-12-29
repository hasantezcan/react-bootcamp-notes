import { useEffect, useState } from "react";
import "./App.css";

import Counter from "./components/Counter";

function App() {
	const [isVisible, setIsVisible] = useState(true);
	const [name, setName] = useState("Burak");
	const [age, setAge] = useState(22);

	// useEffect(() => {
	// 	console.log("State updated");
	// });

	useEffect(() => {
		console.log("App component mounted");

		return () => console.log("App component unmounted!");
	}, []);

	useEffect(() => {
		console.log("age/name state updated");
	}, [age, name]);

	return (
		<div className="App">
			<header className="App-header">
				{isVisible && <Counter />}

				<button onClick={() => setIsVisible(!isVisible)}>Toggle</button>

				<br />
				<br />
				<br />
				<br />
				<br />

				{name}
				<button onClick={() => setName("Murat" + Math.random())}>
					Change name
				</button>
				<button onClick={() => setAge(29)}>Change age</button>
			</header>
		</div>
	);
}

export default App;
