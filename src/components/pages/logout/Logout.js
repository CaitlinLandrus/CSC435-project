import React, { Component } from 'react';
import  Button  from '../../FormFields/Button'
import  Header  from '../../PageElements/Header'


/*
    Written By: Caitlin Landrus
    Course: 100 CSC 435 Advanced Web App Development,
    Assignment: Week 3, Assignment 3
    Created: 3/28/2020
    Revised: 4/9/2020 - Updated to use Redux logoffAction and profile

*/

class Logout extends Component{
    componentDidMount = () => {
      document.title = 'Sign Out | CSP Store';
    }

    /** Form Constructor */
    constructor(props) {
        super(props);


        this.handleLogout = this.handleLogout.bind(this);
    }

    /**
    * Sends the empty username and password back to app.js
    */
    handleLogout = (e) => {
        //prevents refresh of the page on submit
        e.preventDefault()

        //passes the user data to the redux logoff action
        this.props.logoffAction(
            this.props.profile.userID
        )

    };

    render() {
        return(
            <div className = "logoff">
                <Header header={"Log Off"} />
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
        );
    }
}


export default Logout;
