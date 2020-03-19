import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';

const Home = () =>(
    <HomePage />
);

const Login = () =>(
    <LoginPage />
);

const Register = () =>(
    <RegisterPage />
);


function App() {
  return (
    <Router>
        <div className="App">
            {/*//Reference on using Routes https://github.com/morchf/react-login-form/blob/master/src/App.js */}
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </div>
    </Router>

  );
}
export default App;
