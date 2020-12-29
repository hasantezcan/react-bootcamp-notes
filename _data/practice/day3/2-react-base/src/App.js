import { useState } from "react";

import UserList from "./components/UserList";

function App() {
	const [isVisible, setIsVisible] = useState(true);
	const [users, setUsers] = useState([
		{ id: 1, name: "Metin", age: 22 },
		{ id: 2, name: "Hande", age: 24 },
	]);

	const handleToggle = () => setIsVisible(!isVisible);

	return (
		<div>
			<button onClick={handleToggle}>Toggle {isVisible ? "off" : "on"}</button>

			{isVisible && (
				<>
					<UserList users={users} setUsers={setUsers} />
					<hr />
				</>
			)}
		</div>
	);
}

export default App;
