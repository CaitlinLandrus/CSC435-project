import React, { Component } from 'react';
import  Button  from '../../FormFields/Button'


/*
    Written By: Caitlin Landrus
    Course: 100 CSC 435 Advanced Web App Development,
    Assignment: Week 3, Assignment 3
    Created: 3/28/2020
    Revised:

*/

class Logout extends Component{
    componentDidMount = () => {
      document.title = 'Sign Out | CSP Store';
    }

    /** Form Constructor */
    constructor(props) {
        super(props);

        //Referenced: https://www.youtube.com/watch?v=qH4pJISKeoI
        //will likely need to track error state?
        this.state  ={
            username: '',
            password: '',
            navigate: false
        };

        this.handleLogout = this.handleLogout.bind(this);
    }

    /**
    * Sends the empty username and password back to app.js
    */
    handleLogout = (e) => {
        console.log(e);
        this.setState({
            navigate: true
        });
        this.props.callback(this.state.username, this.state.password);

    };


    render() {
        return(
            <div className = "logoff">
            <h2 className= "App-header">Log Off</h2>
                <div className = "LoginPage-form-container">


                    <form className = "LoginPage-form" onSubmit={this.handleLogout}>
                        <p> Are you sure you want to sign out?</p>
                        <Button
                            type={"submit"}
                            value = {"submit"}
                            title = "Log Off"
                        />
                    </form>
                </div>
            </div>
        //    <button type = "submit" onClick={this.logout}>Log Out</button>
        );
    }
}


export default Logout;
