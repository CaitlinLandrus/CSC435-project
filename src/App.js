import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';




function App() {
  return (
    <Router>
        <div className="App">
            {/*//Reference on using Routes https://github.com/morchf/react-login-form/blob/master/src/App.js */}
            <NavBar />
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
        </div>
    </Router>

  );
}
export default App;
