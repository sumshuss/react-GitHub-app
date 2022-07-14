import './main.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CommitsList = ({ repo }) => {
	const [commits, setCommits] = useState([]);

	useEffect(() => {
		const getCommits = async () => {
			console.log(repo);

			const result = await axios.get(
				`https://api.github.com/repos/${repo.full_name}/commits`
			);
			setCommits(result.data);
			console.log(result.data);
		};
		getCommits();
	}, [repo]);

	return (
		<div className='commits-container'>
			<div className='inner-box'>
				<h4>Commit History</h4>
				{commits.map((commit, index) => {
					return (
						<li key={index}>
							<p> {commit.commit.author.name} </p>
							<p>{commit.commit.message}</p>
						</li>
					);
				})}
			</div>
		</div>
	);
};
export default CommitsList;
