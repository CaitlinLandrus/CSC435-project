import React, { Component } from 'react';
import Button  from '../../FormFields/Button'
import Input  from '../../FormFields/Input'
import Select  from '../../FormFields/Select'
import Error  from '../../Error/Error'
import Header from '../../PageElements/Header'
import './RegistrationPage.css';


/*
    Written By: Caitlin Landrus
    Course: 100 CSC 435 Advanced Web App Development,
    Assignment: Week 3, Assignment 3
    Created: 3/22/2020
    Revised: 3/28/2020 - Added validation to fields

    Summary: both general and admin users can register

*/

class RegisterPage extends Component {
    //sets the title of my page
    componentDidMount() {
       document.title = 'Create Account | CSP Store';
    }
    onSubmit = (data) => {
        console.log("Regiser page submitted: " , data)
    };
    render() {
        return (
            <div className="Register">
                <Header header = {"New Customer"} />
                <RegisterForm onSubmit={data => this.onSubmit(data)} />
            </div>
        );
    }
}

const initialState = {
    //JSON user
    user:{
        type: '',
        username: '',
        password:'',
        confirmPassword:'',
        firstName:'',
        lastName: '',
        email: ''
    },
    error:{
        typeError: '',
        usernameError: '',
        passwordError:'',
        confirmPasswordError:'',
        firstNameError:'',
        lastNameError: '',
        emailError: ''
    },
    typeOptions:['Administrator', 'Student', 'Parent', 'Other']

}

class RegisterForm extends Component{

    /** Form Constructor */
    constructor(props) {
        super(props);
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
        let value = e.target.value;
        let name = e.target.name;
        this.setState( prevState => {
           return {
              user : {
                  //unpacking
                       ...prevState.user, [name]: value
                      }
           }
       })
    }

    /**
    * Validates the user's input to ensure all required fields are populated
    * and makes sure the password and confirmation password match.
    */
    validate = () =>{
        let typeError = '';
        let usernameError = '';
        let passwordError ='';
        let confirmPasswordError ='';
        let firstNameError = '';
        let lastNameError = '';
        let emailError = '';


        //Validate Type is populated
        if(!this.state.user.type){
            typeError = '* Account Type is required';
        }

        //Validate first name is populated
        if(!this.state.user.username){
            usernameError = '* Username is required';
        }

        //Validate first name is populated
        if(!this.state.user.firstName){
            firstNameError = '* First Name is required';
        }

        //Validate first name is populated
        if(!this.state.user.lastName){
            lastNameError = '* Last Name is required';
        }

        //Validate email is populated
        if(!this.state.user.email){
            emailError = '* Email is required';
        }

        //Validate password is populated
        if(!this.state.user.password){
            passwordError = '* Password is required';
        }        //Validate password is populated
                if(!this.state.user.password){
                    passwordError = '* Password is required';
                }


        //Confirm password is populated
        if(!this.state.user.confirmPassword){
            confirmPasswordError = '* Confirm Password is required';
        }

        //Confirm password matches actual password
        if(this.state.user.password !== this.state.user.confirmPassword){
            confirmPasswordError = '* Passwords do not match';
        }

        //update error state if there are any errors
        if(typeError || firstNameError || lastNameError || emailError
            || usernameError || passwordError || confirmPasswordError ){
            this.setState( prevState => {
               return {
                  error : {
                      //unpacking
                            ...prevState.error.typeError, typeError,
                            ...prevState.error.firstNameError, firstNameError,
                            ...prevState.error.lastNameError, lastNameError,
                            ...prevState.error.emailError, emailError,
                            ...prevState.error.usernameError, usernameError,
                            ...prevState.error.passwordError, passwordError,
                            ...prevState.error.confirmPasswordError, confirmPasswordError
                          }
               }
           })
            return false;
        }

        //return true if no errors
        return true;
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
        const isValid = this.validate();
        console.log(this.state);

        if(isValid){
            //pass the state to the RegistrationPage
            this.props.onSubmit(this.state) 

            //resets the fields to blank
            this.setState(initialState);
        }
    }

    render(){
        return(
            <div className = "RegisterPage-form-container">
                <h3>Create Account</h3>

                <form className = "RegisterPage-form" onSubmit={this.handleSubmit}>
                    {/* account type -- calls handleChange() method when user types to update state */}
                    <Select
                        title={'Account Type'}
                        name={"type"}
                        value={this.state.user.type}
                        options={this.state.typeOptions}
                        placeholder ={'Select a value'}
                        onChange={this.handleChange}
                    />
                    <br/><br/>
                    <Error>{this.state.error.typeError}</Error>




                    {/* first name -- calls handleChange() method when user types to update state */}
                    <Input
                        title ="First Name:"
                        name={"firstName"}
                        type = "text"
                        value = {this.state.user.firstName}
                        onChange = {this.handleChange}
                    />
                    <Error>{this.state.error.firstNameError}</Error>

                    {/* last name -- calls handleChange() method when user types to update state */}
                    <Input
                        title ="Last Name:"
                        name={"lastName"}
                        type = "text"
                        value = {this.state.user.lastName}
                        onChange = {this.handleChange}
                    />
                    <Error>{this.state.error.lastNameError}</Error>

                    {/* email -- calls handleChange() method when user types to update state */}
                    <Input
                        title ="Email:"
                        name={"email"}
                        type = "email"
                        value = {this.state.user.email}
                        onChange = {this.handleChange}
                    />
                    <Error>{this.state.error.emailError}</Error>


                    {/* Username -- calls handleChange() method when user types to update state */}
                    <Input
                        title ="Username:"
                        name={"username"}
                        type = "text"
                        value = {this.state.user.username}
                        onChange = {this.handleChange}
                    />
                    <Error>{this.state.error.usernameError}</Error>


                    {/* Password  -- calls handleChange() method when user types to update state*/}
                    <Input
                        title ="Password:"
                        name={"password"}
                        type = "password"
                        value = {this.state.user.password}
                        onChange = {this.handleChange}
                    />
                    <Error>{this.state.error.passwordError}</Error>

                    {/* confirmPassword  -- calls handleChange() method when user types to update state*/}
                    <Input
                        title ="Confirm Password:"
                        name={"confirmPassword"}
                        type = "password"
                        value = {this.state.user.confirmPassword}
                        onChange = {this.handleChange}
                    />
                    <Error>{this.state.error.confirmPasswordError}</Error>
                    <br/>

                    {/* When submit button is clicked, the form calls handleSubmit */}
                    <Button
                        type={"submit"}
                        value = {"Submit"}
                        title = "Create Account"
                    />
                </form>
            </div>

        );
    }
}

export default RegisterPage;
