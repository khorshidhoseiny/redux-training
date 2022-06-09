import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/Users/UsersAction";

const UserContainer = () => {
	const userData = useSelector((state) => state.user);
	console.log(userData);
	const { users, error, Loading } = userData;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchUsers());
	}, []);

	const renderUsers = () => {
		if (Loading) return <p>Loading...</p>;
		if (!Loading && error) return <p>{error}</p>;
		if (users.length && userData)
			return (
				<div>
					<h2>Users list</h2>
					{users.map((user) => (
						<p key={user.id}>{user.name}</p>
            ))}
				</div>
			);

	};
	return <div>{renderUsers()}</div>;
};

export default UserContainer;
