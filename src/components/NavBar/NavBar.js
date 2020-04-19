import React, {useContext} from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {CartContext} from '../pages/cart/CartContext';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';


/*
    Written By: Caitlin Landrus
    Course: 100 CSC 435 Advanced Web App Development,
    Assignment: Week 2, Assignment 2
    Created: 3/15/2020
    Revised: 3/20/2020 - Submitted Login page and NavBar
    Revised: 3/28/2020 - Added Account and Logoff if username and password are populated
    Revised: 4/9/2020 - Redux Store profile
    Revised: 4/11/2020 - Updated Cart Count to use the total of the purchQuantity from each item

*/

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,

  },
}))(Badge)

const NavBar = (props) =>{
    const [cart] = useContext(CartContext);
    //totals up the purchased quanity for each item
    const totalProducts = cart.reduce((quantity, current) => quantity + current.purchQuantity, 0)

    /**
    * If the username and password are populated, it will show My Account link
    *
    * parameter: username and password
    * return: Link to My Account
    */
    function showAccountPage(username, password){
        if(username || password){
            return <div className = "header-links"><Link to="/account" className='head-link'>My Account</Link></div>
        }
    }

    /**
    * If the username and password are populated, it will show Log Off, otherwise Sign In or Sign Up
    *
    * parameter: username and password
    * return: Link to Log Off if not empty strings, otherise Link to Sign In and Sign Up pages
    */
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

    function manageStore(userType){
        if(userType === "Administrator"){
            return(
                    <div className = "links"><Link to="/manageStore" className='text-link'>Manage Store</Link></div>
            )
        }
    }

    return(
        <div>
            <div className = "header">
                <h1 className = "title"> Concordia University Store</h1>
                <div className = "head-link-container">
                    {loginLogoff(props.profile.username, props.profile.password)}
                    {showAccountPage(props.profile.username, props.profile.password)}
                </div>
            </div>
            <nav className = "navigation-bar">
            <img src="logo2.png" alt="csp store"  className = "logo"/>
                <div className="link-container">
                    {manageStore(props.profile.type)}
                    <div className = "links"><Link to="/" className='text-link' >Shop</Link></div>
                    <div className = "links">
                        <Link to="/cart" className='text-link' >
                            <StyledBadge badgeContent={totalProducts} color="secondary">
                                <ShoppingCartIcon fontSize="default" className = "cart-icon" />
                            </StyledBadge>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}


export default NavBar;
