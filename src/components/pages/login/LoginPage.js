import React, { Component } from 'react';
import './LoginPage.css';
import  Button  from '../../FormFields/Button'
import  Input  from '../../FormFields/Input'
import  Error  from '../../Error/Error'
import { Link } from 'react-router-dom'
import  userData from '../../data/userData.json';

/*
    Written By: Caitlin Landrus
    Course: 100 CSC 435 Advanced Web App Development,
    Assignment: Week 2, Assignment 2
    Created: 3/15/2020
    Revised: 3/20/2020 - Submitted Login page and NavBar

    Summary: both general and admin users can login
        - header is the NavBar
        - title included in Nav Bar
        - page title is the h2 tag
*/

class LoginPage extends Component{

    /*  https://dev.to/judearasu/change-the-document-title-on-react-application--4dgo
         - sets the title of my page
     */
    componentDidMount = () => {
      document.title = 'Sign In | CSP Store';
    }

    /**
    * prints the data from the form submission
    * parameters:  Data from form
    * output: writes to console console.log
    */
    onSubmit = (data) => {
        console.log("Login page submitted: " , data)
        this.props.callback(data.username, data.password);
    };

    render() {
      return (
        <div className="LoginPage">
          <h2 className= "App-header">Returning Customer</h2>
          <LoginForm onSubmit={data => this.onSubmit(data)} />
        </div>
      );
    }
}


const initialState = {
    username: '',
    password:'',
    error:{
        usernameError:'',
        passwordError:'',
        invalidLogin:'',
    }
}

class LoginForm extends Component{

    /** Form Constructor */
    constructor(props) {
        super(props);

        //Referenced: https://www.youtube.com/watch?v=qH4pJISKeoI
        //will likely need to track error state?
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


    validateUser = () =>{
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
        if(!contains){
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
            //pass the state to the LoginPage
            this.props.onSubmit(this.state)

            //resets the fields to blank
            this.setState(initialState)
        }
    }

    render(){
        return(
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
        );
    }
}

export default LoginPage;
