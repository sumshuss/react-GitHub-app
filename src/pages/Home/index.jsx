import React, { useState } from 'react';
import axios from 'axios';

// import { useNavigate } from 'react-router-dom';

function Home({ repos, setRepos }) {
	// const navigate = useNavigate();
	const [user, setUser] = useState('');

	async function getApi() {
		try {
			const result = await axios.get(
				`https://api.github.com/users/${user}/repos`
			);
			setRepos(result.data);
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<>
			<input onChange={(e) => setUser(e.target.value)} />
			<button onClick={getApi}> fetch </button>
			{repos.length > 1 && <h4>repos: {repos.length}</h4>}
			{repos &&
				repos.map((repo) => (
					// <h1 onClick={() => navigate(`/repopage/${repo.id}`)} key={repo.id}>

					// {repo.name}{' '}
					// </h1>

					<div key={repo.id}>
						<h1>{repo.name}</h1>
						<p>{repo.description}</p>
						<p>language: {repo.language}</p>
					</div>
				))}
		</>
	);
}

export default Home;
