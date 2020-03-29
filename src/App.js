import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ShopPage from './components/pages/shop/ShopPage';
import Login from './components/pages/login/LoginPage';
import Logout from './components/pages/logout/Logout';
import RegisterPage from './components/pages/register/RegisterPage';
import AccountPage from './components/pages/account/AccountPage';


class App extends Component{
    state= {
        username : "",
        password : "",
    }

    //gets login information via login page
    login = (username, password) =>{
        //update the state of the applications username/password
        return(
            this.setState({
                username: username,
                password: password,
            })
        )
    }

    //clears user information via logoff page
    logoff = () =>{
        //update the state of the applications username/password
        return(
            this.setState({
                username: "",
                password: ""
            })
        )
    }

    render(){
      return (
          /* Routes the user to the given page */
        <Router>
            <div className="App">
                {/*//Reference on using Routes https://github.com/morchf/react-login-form/blob/master/src/App.js */}
                <NavBar username = {this.state.username} password = {this.state.password} />
                <Route exact path="/"><ShopPage /> </Route>
                <Route path="/login"><Login callback={this.login.bind(this)}/></Route>
                <Route path="/logout"><Logout callback={this.logoff.bind(this)}/></Route>
                <Route path="/register" ><RegisterPage /> </Route>
                <Route path="/account" ><AccountPage username = {this.state.username} password = {this.state.password}  /> </Route>
            </div>
        </Router>

      );
  }
}

export default App;
