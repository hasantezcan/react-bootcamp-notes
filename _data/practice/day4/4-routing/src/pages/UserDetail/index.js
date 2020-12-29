import { useState, useEffect } from "react";

import axios from "axios";
import { useParams, Link } from "react-router-dom";

function UserDetail() {
	let { id } = useParams();

	id = parseInt(id);

	// const [userId, setUserId] = useState(id);

	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState({});

	useEffect(() => {
		setLoading(true);
		axios(`${process.env.REACT_APP_API_ENDPOINT}/users/${id}`)
			.then((res) => setUser(res.data))
			.finally(() => setLoading(false));
	}, [id]);

	return (
		<div>
			<h2>User Detail</h2>

			{loading && <div>Loading...</div>}
			{user && !loading && JSON.stringify(user)}

			<br />
			<br />

			{/* <button onClick={() => setUserId(userId + 1)}>
				Next User (id: {userId + 1})
			</button> */}

			<Link to={`/users/${id + 1}`}>Next User (id: {id + 1})</Link>
		</div>
	);
}

export default UserDetail;
