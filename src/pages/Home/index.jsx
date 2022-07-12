import React from "react";
import axios from "axios";
import { useState } from "react";   


function  Home() {

    const [ repos, setRepos ] = useState([]);
    const [ user, setUser ] = useState('');

    async function getApi() {

        try {
            const result = await axios.get(`https://api.github.com/users/${user}/repos`)
            setRepos(result.data)
        } catch(err) {

            console.log(err)
        }

    }

    return (

        <>
            <input onChange={(e) => setUser(e.target.value) }/>
            <button onClick={getApi}> fetch </button>
            {repos && repos.map(repo => <h1 key={repo.id}> {repo.name} </h1>)}
        </>
    )
}

export default Home;
