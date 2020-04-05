import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ShopPage from './components/pages/shop/ShopPage';
import Login from './components/pages/login/LoginPage';
import Logout from './components/pages/logout/Logout';
import RegisterPage from './components/pages/register/RegisterPage';
import AccountPage from './components/pages/account/AccountPage';
import Cart from './components/pages/cart/Cart';

import {CartProvider} from './components/pages/cart/CartContext';


class App extends Component{
    state= {
        username : "",
        password : "",
    }

    /* gets login information via login page */
    login = (state) =>{
        //update the state of the applications username/password
        return(
            this.setState({
                username: state.username,
                password: state.password,
            })
        )
    }

    /*  clears user information via logoff page  */
    logoff = () =>{
        //update the state of the applications username/password
        return(
            this.setState({
                username: "",
                password: ""
            })
        )
    }

    updatePass = (newPassword) =>{
        //update the state of the applications password
        return(
            this.setState({
                password: newPassword
            })
        )
    }

    updateUser = (newUsername) =>{
        //update the state of the applications username
        return(
            this.setState({
                username: newUsername
            })
        )
    }

    updateCart = (cart) =>{
        return(
            this.setState({
                cart: cart
            })
        )
    }

    render(){
      return (
          /* Routes the user to the given page */
         <CartProvider>
        <Router>
            <div className="App">
                {/*//Reference on using Routes https://github.com/morchf/react-login-form/blob/master/src/App.js */}
                <NavBar username = {this.state.username} password = {this.state.password} />
                <Route exact path="/"><ShopPage /> </Route>
                <Route path="/login"><Login callback={this.login.bind(this)}/></Route>
                <Route path="/logout"><Logout callback={this.logoff.bind(this)}/></Route>
                <Route path="/register" ><RegisterPage /> </Route>
                <Route path="/cart" ><Cart /> </Route>
                <Route path="/account" ><AccountPage key={1} username = {this.state.username} password = {this.state.password} callbackPass={this.updatePass.bind(this)} callbackUser={this.updateUser.bind(this)} /> </Route>
                
            </div>
        </Router>
        </CartProvider>

      );
  }
}

export default App;
