import './main.css';
import React from 'react';
import CommitsList from '../CommitsList';

const UserCard = ({ repo }) => {
	// get only the repo owners details from the repo
	const user = repo.owner;

	const isPopulated = (value) => {
		if (value.length < 1) return false;
		return value;
	};

	const createdAt = () => {
		const repoCreationDate = new Date(repo.created_at);
		return `${repoCreationDate.getDate()}/${repoCreationDate.getMonth()}/${repoCreationDate.getFullYear()}`;
	};

	return (
		<main>
			<div className='user-head-container'>
				{/* Repo Author Picture */}
				<img
					className='avatar'
					src={user.avatar_url}
					alt='github user avatar'
				/>
				{/* Link to Repo */}
				<a href={user.html_url} target='_blank' rel='noopener noreferrer'>
					Visit Repo
				</a>
				{/* Github Username */}
				<p>Repo Owner: {user.login}</p>
			</div>
			<div className='info-container'>
				<section>
					<p className='tag'>Repository:</p>
					<p className='details d-1'>{repo.name}</p>
				</section>
				{isPopulated(repo.description) && (
					<section>
						<p className='tag'>Description</p>
						<p className='details d-2'>{repo.description}</p>
					</section>
				)}

				{isPopulated(repo.language) && (
					<section>
						<p className='tag'>Primary Language</p>
						<p className='details d-3'>{repo.language}</p>
					</section>
				)}
				<h4>created: {createdAt()}</h4>
			</div>
			<CommitsList repo={repo} />
		</main>
	);
};

export default UserCard;
