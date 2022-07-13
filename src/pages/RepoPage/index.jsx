// import { useParams } from 'react-router-dom';
import React from 'react';
import UserCard from '../../components/UserCard';
const RepoPage = ({ repos }) => {
	// const id = useParams(id || 1);
	// const repo = repos && repos.filter((e) => e.id === id);

	// to be deleted and replaced with above once routes are done
	const repo = repos[0];

	return (
		<>
			<UserCard repo={repo} />
			<h1>{repo.name}</h1>
		</>
	);
};

export default RepoPage;

// {
// 	/* <link to="/" element={<home />} />
// <link to="/repopage/:id" element={<RepoPage repos={repos} />} /> */
// }
