import './main.css';
import React from 'react';
const UserCard = ({ repo }) => {
	// get only the repo owners details from the repo
	const user = repo.owner;

	return (
		<main>
			{/* Github Username */}
			<h4>Repo Owner: {user.login}</h4>

			{/* Repo Author Picture */}
			<img className='avatar' src={user.avatar_url} alt='github user avatar' />

			{/* Link to Repo */}
			<a href={user.html_url} target='_blank' rel='noopener noreferrer'>
				Visit Repo
			</a>

			<h4>Repo: {repo.name}</h4>
			<p>{repo.description}</p>
			<p>Primary language: {repo.language}</p>
		</main>
	);
};

export default UserCard;
