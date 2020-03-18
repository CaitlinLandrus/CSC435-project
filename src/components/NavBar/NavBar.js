import React from 'react';
import './NavBar.css';
//https://medium.com/@ayabellazreg/make-a-simple-shopping-cart-app-using-react-redux-1-3-fefde93e80c7
import { Link } from 'react-router-dom'




const NavBar = ()=>{
    return(
        <nav className = "nav-wrapper">
            <div className = "container">
                <ul className = "right">
                    <li><Link to="/" className='text-link'>Home</Link></li>
                    <li><Link to="/login" className='text-link'>Sign In</Link></li>
                    <li><Link to="/register" className='text-link'>Sign Up</Link></li>
                    <li><Link to="/cart" className='text-link'>Cart</Link></li>
                </ul>
            </div>


        </nav>
    );
}

export default NavBar;
