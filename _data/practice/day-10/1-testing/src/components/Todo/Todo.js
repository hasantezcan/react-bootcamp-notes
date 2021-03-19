import { useState } from "react";

function Todo() {
	const [title, setTitle] = useState("");
	const [todos, setTodos] = useState(["selam"]);

	return (
		<div>
			<label>
				Title
				<input value={title} onChange={(e) => setTitle(e.target.value)} />
			</label>
			<button onClick={() => setTodos([...todos, title])}>Ekle</button>

			{todos.map((item, key) => (
				<div key={key}>{item}</div>
			))}
		</div>
	);
}

export default Todo;
