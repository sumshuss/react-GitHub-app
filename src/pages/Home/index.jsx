import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Home( {repos, setRepos}) {

    const [ user, setUser ] = useState('');
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
		<>
			<input onChange={(e) => setUser(e.target.value)} />
			<button onClick={getApi}> fetch </button>
			{repos &&
				repos.map((repo) => (
					<h1 onClick={() => navigate(`/repopage/${repo.id}`)} key={repo.id}>
						{' '}
						{repo.name}{' '}
					</h1>
				))}
		</>
	);
}

export default Home;
