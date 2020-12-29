import { useState, useEffect } from "react";

import Button from "./Button";

function UserList({ users, setUsers }) {
	const [name, setName] = useState("");

	useEffect(() => {
		setName("");
	}, [users]);

	const handleClick = () => {
		if (name) {
			setUsers((prev) => [...prev, { name, age: 28 }]);
		}
	};

	const handleChangeName = (event) => setName(event.target.value);

	const handleRemove = (userId) => {
		const filtered = users.filter((user) => user.id !== userId);
		setUsers(filtered);
	};

	return (
		<>
			{users.length > 0 ? (
				<ul>
					{users.map((user, i) => (
						<li key={i}>
							{i + 1} - {user.name}{" "}
							<span
								onClick={() => handleRemove(user.id)}
								style={{ color: "blue", cursor: "pointer" }}
							>
								(x)
							</span>
						</li>
					))}
				</ul>
			) : (
				<div>Henüz kullanıcı bulunmuyor.</div>
			)}

			<input value={name} onChange={handleChangeName} />
			<Button onClick={handleClick} text="Click" style={{ color: "red" }} />
		</>
	);
}

export default UserList;
