import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Section from './structure';
import './index.css'

function Home({ repos, setRepos }) {
	const [user, setUser] = useState('');
	const navigate = useNavigate();

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
		
			<div className='search'>
			<Section />

			<div className='input'>
				<input onChange={(e) => setUser(e.target.value)} />
				<button className="btn" onClick={getApi}> fetch </button>
				{repos.length > 1 && <h4>repos: {repos.length}</h4>}
			</div>
			<ul>
			{repos &&
				repos.map((repo) => {
					return (
						<div key={repo.id}>
							<li
								onClick={() => navigate(`/repopage/${repo.id}`)}
								key={repo.id}
							>
								{repo.name}
							</li>
						</div>
					);
				})}			
			</ul>
		</div>
	);
}

export default Home;
