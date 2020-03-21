import React from 'react';
import './NavBar.css';
//https://medium.com/@ayabellazreg/make-a-simple-shopping-cart-app-using-react-redux-1-3-fefde93e80c7
import { Link } from 'react-router-dom'




const NavBar = ()=>{
    return(
        <div>

            <nav className = "navigation-bar">
            <img src="logo.png" alt="csp store"  className = "logo"/>
                <div className="link-container">
                    <div className = "links"><Link to="/" className='text-link'>Home</Link></div>
                    <div className = "links"><Link to="/login" className='text-link'>Sign In</Link></div>
                    <div className = "links"><Link to="/register" className='text-link'>Sign Up</Link></div>
                    <div className = "links"><Link to="/cart" className='text-link'>Cart</Link></div>
                </div>

            </nav>
        </div>
    );
}

export default NavBar;
