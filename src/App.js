import React, { useState } from 'react';
import { Home } from './pages';

import './App.css';

function App() {
	const [repos, setRepos] = useState([]);

	return (
		<div className='App'>
			<Home repos={repos} setRepos={setRepos} />
		</div>
	);
}

export default App;
