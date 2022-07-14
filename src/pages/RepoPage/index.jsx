import React, { useEffect, useState } from 'react';
import UserCard from '../../components/UserCard';
import { useParams } from 'react-router-dom';

const RepoPage = ({ repos }) => {
	const { id } = useParams();
	const [repo, setRepo] = useState('');
	const [loading, setLoading] = useState(true);
	// const navigate = useNavigate();

	// const redirectUser = () => {
	// 	!repo && navigate(-1);
	// };

	useEffect(() => {
		async function getRepo(repoId) {
			setRepo(repos.filter((e) => e.id.toString() === repoId)[0]);
			setLoading(false);
		}
		getRepo(id);
	}, [repos, id]);

	return (
		<div>
			<>{loading ? <h2>loading...</h2> : <UserCard repo={repo} />}</>
		</div>
	);
};

export default RepoPage;
