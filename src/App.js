import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ShopPage from './components/pages/shop/ShopPage';
import Login from './components/pages/login/LoginPage';
import Logout from './components/pages/logout/Logout';
import RegisterPage from './components/pages/register/RegisterPage';
import AccountPage from './components/pages/account/AccountPage';
import Checkout from './components/pages/checkout/Checkout';
import Cart from './components/pages/cart/Cart';
import ManageStore from './components/pages/manageStore/ManageStore';
import {CartProvider} from './components/pages/cart/CartContext';
import {loginAction} from "./redux/actions/user_action.js";
import {logoffAction} from "./redux/actions/user_action.js";
import {updateAccountAction} from "./redux/actions/user_action.js";


class App extends Component{

    render(){
        console.log("Store Profile", this.props.profile)
        const {profile, loginAction, logoffAction, updateAccountAction} = this.props;

      return (
          /* Routes the user to the given page */
         <CartProvider>
        <Router>
            <div className="App">
                {/*//Reference on using Routes https://github.com/morchf/react-login-form/blob/master/src/App.js */}
                <NavBar profile = {profile}  />
                <Route exact path="/"><ShopPage /> </Route>
                <Route exact path="/"><ManageStore /> </Route>
                <Route path="/login"><Login loginAction = {loginAction} /></Route>
                <Route path="/logout"><Logout profile ={profile} logoffAction={logoffAction}/></Route>
                <Route path="/register" ><RegisterPage /> </Route>
                <Route path="/cart" ><Cart profile = {profile}/> </Route>
                <Route path="/checkout" ><Checkout profile = {profile}/> </Route>
                <Route path="/account" ><AccountPage key={profile.userID} profile = {profile}  updateAccountAction={updateAccountAction} /> </Route>

            </div>
        </Router>
        </CartProvider>

      );
  }
}

const mapStateToProps =({profile}) =>{
    return{
        profile
    }
}

//Reference: https://www.youtube.com/watch?v=JLBPJzl92os
const mapActionsToProps = (dispatch) =>{
    //bind the user profile actions
    return bindActionCreators({
        loginAction,
        logoffAction,
        updateAccountAction
    }, dispatch)
}

export default connect(mapStateToProps,mapActionsToProps)(App);
