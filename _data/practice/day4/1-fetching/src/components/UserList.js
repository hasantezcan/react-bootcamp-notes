import { useState, useEffect } from "react";

import Loader from "./Loader";
import UserListItem from "./UserListItem";
import axios from "axios";

function UserList() {
	const [loading, setLoading] = useState(true);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios("https://jsonplaceholder.typicode.com/users")
			.then((res) => setUsers(res.data))
			.catch((e) => console.log(e))
			.finally(() => setLoading(false));
	}, []);

	return (
		<ul>
			<h1>Users</h1>
			<Loader text="Loading..." isVisible={loading} />

			{users.map((user) => (
				<UserListItem key={user.id} user={user} />
			))}
		</ul>
	);
}

export default UserList;
