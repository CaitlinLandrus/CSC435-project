import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom'

/*
    Written By: Caitlin Landrus
    Course: 100 CSC 435 Advanced Web App Development,
    Assignment: Week 2, Assignment 2
    Created: 3/15/2020
    Revised: 3/20/2020 - Submitted Login page and NavBar
    Revised: 3/28/2020 - Added Account and Logoff if username and password are populated

*/


const NavBar = (props) =>{


    function showAccountPage(username, password){
        if(username || password){
                return <div className = "header-links"><Link to="/account" className='head-link'>My Account</Link></div>
        }
    }

    function loginLogoff(username, password){
        if(username || password){
            return <div className = "header-links"><Link to="/logout" className='head-link'>Log Off</Link></div>
        }
        else{
            return (
                <div>
                    <div className = "header-links"><Link to="/login" className='head-link'>Sign In</Link></div>
                    <div className = "header-links"><Link to="/register" className='head-link'>Sign Up</Link></div>
                </div>
            )
        }
    }
    return(
        <div>
            <div className = "header">
                <h1 className = "title"> Concordia University Store</h1>
                <div className = "head-link-container">
                    {loginLogoff(props.username, props.password)}
                    {showAccountPage(props.username, props.password)}
                </div>
            </div>
            <nav className = "navigation-bar">
            <img src="logo2.png" alt="csp store"  className = "logo"/>
                <div className="link-container">
                    <div className = "links"><Link to="/" className='text-link' >Shop</Link></div>
                    <div className = "links"><Link to="/cart" className='text-link' >Cart</Link></div>
                </div>
            </nav>
        </div>
    );
}


export default NavBar;
