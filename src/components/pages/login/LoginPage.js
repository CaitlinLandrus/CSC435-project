import React, { Component } from 'react';
import './LoginPage.css';
import  Button  from '../../FormFields/Button'
import  Input  from '../../FormFields/Input'
import  Error  from '../../Error/Error'
import  Header  from '../../PageElements/Header'
import { Link } from 'react-router-dom'
import  userData from '../../data/userData.json';

/*
    Written By: Caitlin Landrus
    Course: 100 CSC 435 Advanced Web App Development,
    Assignment: Week 2, Assignment 2
    Created: 3/15/2020
    Revised: 3/20/2020 - Submitted Login page and NavBar
            3/28/2020 - Updated to send date to app.js, added validation to fields

    Summary: both general and admin users can login
        - header is the NavBar
        - title included in Nav Bar
        - page title is the h2 tag
*/



const initialState = {
    username: '',
    password:'',
    error:{
        usernameError:'',
        passwordError:'',
        invalidLogin:'',
    }
}

class LoginPage extends Component{
    /** Form Constructor */
    constructor() {
        super();
        this.state = initialState;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    /*
        the change function is built to track changes on the form fields
        and will update the state variables when any of the fields are changed.

        parameters: change event
        Output: prints the change track in the colnsole
        Results: Updates the state's to be the changed value (for given name)

     */
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    /*
    * Validates the user input.  Ensures all required fields are populated.
    * Ensures the username/password are valid based on the data provided
    */
    validateUser = () =>{
        //this will allow the values to get reset on re-submit
        let usernameError ='';
        let passwordError = '';
        let invalidLogin = '';
        let contains = false;

        //username is empty
        if(!this.state.username){
            usernameError = '* Username is required';
        }

        //password is empty
        if(!this.state.password){
            passwordError = '* Password is required';
        }

        //checks if the username and password exsits in the json object
        else{
            userData.forEach((user)=>{
                if(user.username === this.state.username && user.password === this.state.password){
                    contains = true;
                }
            })
        }

        //if the username and password do not exist in the json, update error message
        //only if the username and password have been populated.
        if(!contains && this.state.password && this.state.username){
            invalidLogin = "* Invalid username or password"
        }

        //update error state if there are any errors
        if(usernameError || passwordError || invalidLogin ){
            this.setState( prevState => {
               return {
                  error : {
                      //unpacking
                            ...prevState.error.usernameError, usernameError,
                            ...prevState.error.passwordError, passwordError,
                            ...prevState.error.invalidLogin, invalidLogin
                          }
               }
           })
            return false;
        }
        //username and password match
        return true;
    }

    /*  This is outputting the state of our fields to the console for now.
        We are not connected to a databse for updating any data at this point

        Parameter: submit event
        Output: none
        Result: passes the state to parent via props, resets state to empty fields
    */
    handleSubmit = (e) =>{
        console.log(e);
        //prevent default prefents the default behavior or refreshing the page on submit
        e.preventDefault()
        const isValid = this.validateUser();

        console.log(isValid)
        //if the user is valid, send data to parent and clear fields
        if(isValid){
            //pass the state to App.js
            this.props.callback(this.state)

            //resets the fields to blank
            this.setState(initialState)
        }
    }

    render(){
        return(
            <div className="LoginPage">
                <Header header={"Returning Customer"}/>
                <div className = "LoginPage-form-container">
                    <h3>Sign In</h3>

                    <form className = "LoginPage-form" onSubmit={this.handleSubmit}>

                        <Error>{this.state.error.invalidLogin} <br/></Error>

                        {/* Username -- calls handleChange() method when user types to update state */}
                        <Input
                            title ="Username:"
                            name={"username"}
                            type = "text"
                            value = {this.state.username}
                            onChange = {this.handleChange}
                        />
                        <Error>{this.state.error.usernameError}</Error>
                        <br/>

                        {/* Password  -- calls handleChange() method when user types to update state*/}
                        <Input
                            title ="Password:"
                            name={"password"}
                            type = "password"
                            value = {this.state.password}
                            onChange = {this.handleChange}
                        />
                        <Error>{this.state.error.passwordError}</Error>
                        <br/>

                        {/* When submit button is clicked, the form calls handleSubmit */}
                        <Button
                            type={"submit"}
                            value = {"Submit"}
                            title = "Sign In"
                        />

                    </form>

                    <div className = "createAccount">
                        <p>Not registered? <span> </span><Link to="/register" className = 'create-account-link'>Create an account</Link> </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;
