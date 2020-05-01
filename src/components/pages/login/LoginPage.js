import React, { Component, useEffect } from 'react';
import './LoginPage.css';
import  Button  from '../../FormFields/Button'
import  Input  from '../../FormFields/Input'
import  Error  from '../../Alert/Error'
import  Header  from '../../PageElements/Header'
import { MemoryRouter, Link } from 'react-router-dom'
import  userData from '../../data/userData.json';
import axios from 'axios';


/*
    Written By: Caitlin Landrus
    Course: 100 CSC 435 Advanced Web App Development,
    Assignment: Week 2, Assignment 2
    Created: 3/15/2020
    Revised: 3/20/2020 - Submitted Login page and NavBar
            3/28/2020 - Updated to send date to app.js, added validation to fields
            4/9/2020 - Updated to use redux loginAction and profile

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
    },
    users:[]
}


class LoginPage extends Component{


    componentDidMount = async () => {
        document.title = 'Login | CSP Store';
        // Print the users in the databaase
        axios.get('/api/users')
          .then((response) => {
            const users  = response.data;
            this.setState({users})
            //console.log("State Users", this.state.users)
          })
          .catch(() => {if(process.env.NODE_ENV !== 'test'){console.log('Error fetching new users')}});
   }


/*
    componentDidMount = async () => {
        // Print the users in the databaase
        const  users
    axios.get('/api/users')
          .then((response) => {
            const  users  = response.data;
            console.log("Users on Mount", users)
          })
          .catch(() => alert('Error fetching new users'));

          console.log(users)
          console.log (typeof users)

          /*
          const params = {
              username:"caitlin.landrus",
              password:"testing"
          }

          axios.get('/api/getUser/caitlin.landrus/testing')
                .then((response) => {
                  const { users } = response.data;
                  console.log("Users on Mount", users)
                })
                .catch(() => alert('Error fetching new users'));

        }/*

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

    /*getUser = async (username, password)=>{
        await axios.get('/api/getUser/caitlin.landrus/testing')
              .then((response) => {
                const { users } = response.data;
                console.log("Users in validator", users)
                return users;
              })
              .catch(() => alert('Error fetching new users'));
    }*/

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
        let validUser = {};
        //let validUser = {};

        //username is empty
        if(!this.state.username){
            usernameError = 'Username is required';
        }

        //password is empty
        if(!this.state.password){
            passwordError = 'Password is required';
        }

        //checks if the username and password exsits in the json object
        else{
                var array =[]
                array = this.state.users;

            for (var i = 0; i < this.state.users.users.length; i++) {
                //console.log("Username  ", this.state.users.users[i]['username'] , "password ", this.state.users.users[i]['password'])
                //console.log("user ", this.state.username, "pass ",  this.state.password)
                if (this.state.users.users[i]['username'] ===this.state.username && this.state.users.users[i]['password'] ===this.state.password) {
                    validUser = this.state.users.users[i];
                    contains = true;
                }
            }


            //prior to adding DB
            /*
            userData.forEach((user)=>{
                if(user.username === this.state.username && user.password === this.state.password){
                    contains = true;
                    validUser = user;
                    //console.log("ValidUser",validUser)
                }
            })*/
        }

        //if the username and password do not exist in the json, update error message
        //only if the username and password have been populated.
        if(!contains && this.state.password && this.state.username){
            console.log("ValidUser",validUser)
            invalidLogin = "Invalid username or password"
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
        return validUser;
    }

    /*  This is outputting the state of our fields to the console for now.
        We are not connected to a databse for updating any data at this point

        Parameter: submit event
        Output: none
        Result: passes the state to parent via props, resets state to empty fields
    */
    handleSubmit = (e) =>{
        //prevent default prefents the default behavior or refreshing the page on submit
        e.preventDefault()
        const isValidUser = this.validateUser();
        //console.log("isValidUser", isValidUser)

        //if the user is valid, send data to parent and clear fields
        if(isValidUser){
            //pass the state to App.js
            //this.props.callback(this.state)

            //passes the user data to the redux login action
            console.log("username",isValidUser.username)
            this.props.loginAction(
                isValidUser._id,
                isValidUser.type,
                isValidUser.firstName,
                isValidUser.lastName,
                isValidUser.email,
                isValidUser.username,
                isValidUser.password
            )

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

                        <Error>{this.state.error.invalidLogin}</Error>

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
                        <p>Not registered? <span> </span><MemoryRouter><Link to="/register" className = 'create-account-link'>Create an account</Link></MemoryRouter> </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;
