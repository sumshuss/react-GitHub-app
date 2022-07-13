import React from 'react';
const UserCard = ({ repo }) => {
	// get only the repo owners details from the repo
	const user = repo.owner;

	return (
		<>
			{/* show repo owners github name */}
			<h1>Repo Owner: {user.login}</h1>
			{/* show repo owners picture */}
			<img src={user.avatar_url} alt='github user avatar' />
			{/* open the repo on github "in a new tab" */}
			<a href={user.html_url} target='_blank' rel='noopener noreferrer'>
				Visit Repo
			</a>
		</>
	);
};

export default UserCard;
