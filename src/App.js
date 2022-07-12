import React, { useState } from 'react';
import { Home, RepoPage } from './pages';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout';

import './App.css';

function App() {
	const [repos, setRepos] = useState([]);

	return (
		<div className='App'>
      <Routes>
        <Route path="/" element ={<Layout />}>
			  <Route path="/" element={<Home repos={repos} setRepos={setRepos} />}/>
        <Route path="/RepoPage/:id" element={<RepoPage repos={repos}/>}/>
        </Route>
      </Routes>
		</div>
	);
}

export default App;
