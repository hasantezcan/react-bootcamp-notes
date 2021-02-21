function UserListItem({ user }) {
	return (
		<li>
			{user.id} - {user.name} - @{user.username}
		</li>
	);
}

export default UserListItem;
