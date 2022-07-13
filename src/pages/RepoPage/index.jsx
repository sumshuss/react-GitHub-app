import React, { useEffect, useState } from 'react';
import UserCard from '../../components/UserCard';
import { useParams, useNavigate } from 'react-router-dom';

const RepoPage = ({ repos }) => {
	const { id } = useParams();
	const [repo, setRepo] = useState('');
	const [loading, setLoading] = useState(true);
	const [message, setMessage] = useState();
	const navigate = useNavigate();

	const getRepo = (repoId) => {
		return setRepo(repos.filter((e) => e.id.toString() === repoId)[0]);
	};

	useEffect(() => {
		if (!repo) return navigate(-1);

		try {
			getRepo(id);
			setLoading(false);
		} catch (err) {
			console.log(err);
			setMessage(err);
		}
	}, []);

	return (
		<div>
			{message ? (
				<h1>{message}</h1>
			) : (
				<>{loading ? <h2>loading...</h2> : <UserCard repo={repo} />}</>
			)}
		</div>
	);
};

export default RepoPage;
