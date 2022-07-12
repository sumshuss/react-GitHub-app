import { useParams } from 'react-router-dom';

const RepoPage = ({ repos }) => {
	const id = useParams();
	const repo = repos.filter((e) => e.id === id);

	return (
		<>
			<h1>{repo.name}</h1>
		</>
	);
};

export default RepoPage;

{
	/* <link to="/" element={<home />} />
<link to="/repopage/:id" element={<RepoPage repos={repos} />} /> */
}
