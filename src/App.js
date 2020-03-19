import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import Register from './components/Register/Register';

const Home = () =>(
    <HomePage />
);

const Login = () =>(
    <LoginPage />
);

function App() {
  return (
    <Router>
        <div className="App">
        {/*//Reference on using Routes https://github.com/morchf/react-login-form/blob/master/src/App.js */}
        <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                
             </Switch>

        </div>
    </Router>

  );
}

export default App;
