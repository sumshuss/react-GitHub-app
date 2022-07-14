import './index.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './gith.png';
import { useNavigate } from 'react-router-dom';

function Header() {
	const homePage = 'http://localhost:3000/';
	const url = window.location.href;
	console.log(url);
	const navigate = useNavigate();


    function goBack(){
        navigate(-1)
    }



    return(
        <>
           <nav>
                <img src ={logo} className="nav-icon" alt="small icon of the react logo"/>
                <h3 className="nav--logo_text"> GitHub Repo getter</h3>
                <ul>
                    <li><Link className="nav-title" to="/">Home</Link> </li>
                    <li><Link className="nav-title" to="/RepoPage/:id">RepoPage</Link></li>
                    {url !== homePage && <li className="nav-title" onClick={goBack}> Back </li>}
                </ul>
           </nav> 
        </>
    )

}

export default Header;
