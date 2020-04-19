import React, { Component } from 'react';
import Button  from '../../FormFields/Button'
import Input  from '../../FormFields/Input'
import Error  from '../../Alert/Error'
import Success  from '../../Alert/Success'

class  PasswordForm extends Component{
    /** Form Constructor */
    constructor(props) {
        super(props);
        this.state = {
            user:{ type: '',
                    username: '',
                    password:'',
                    confirmPassword:'',
                    firstName:'',
                    lastName: '',
                    email: ''
                },
            passwords: {
                currentPassword: '',
                newPassword:''
            },
            error:{
                currentPasswordError:'',
                newPasswordError:'',
                confirmPasswordError: ''
            },
            success: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    componentDidMount( ){
        //get json data with user data
        fetch('/userData.json')
        .then(res => res.json())
        //set the form state to the logged in user's information
        .then(element => this.setState({ user: element.find(e => e.username === this.props.loggedInUser.username) }));

        //reset the success value to false after 5 seconds
        this.timer = setInterval(
            () => {
                this.setState(prevState => ({ success: false }))
            },
            5000,
        );

        console.log("Password form has mounted ")
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("Password form unmounted");
    }


    /*
    *    the change function is built to track changes on the form fields
    *    and will update the state variables when any of the fields are changed.
    *
    *    parameters: change event
    *    Output: prints the change track in the colnsole
    *    Results: Updates the state's to be the changed value (for given name)
     */
    handleChange = (e) =>{
        //console.log(e)
        let value = e.target.value;
        let name = e.target.name;
        this.setState( prevState => {
           return {
              passwords : {
                  //unpacking
                       ...prevState.passwords, [name]: value
                      }
           }
       });
    }

    /**
    * Validates the user's input to ensure all required fields are populated
    * and makes sure the password and confirmation password match.
    */
    validate = () =>{
        let confirmPasswordError ='';
        let newPasswordError = '';
        let currentPasswordError = '';


        //reset the state back to false to keep it in sync on re-submit
        this.setState({success: false})

        //Validate current password is populated
        if(!this.state.passwords.currentPassword){
            currentPasswordError = 'Current Password is required';
        }

        //Confirm new password is populated
        if(!this.state.passwords.newPassword){
            newPasswordError = 'New Password is required';
        }

        //current password does not match actual password
        if(this.state.passwords.currentPassword !== this.state.user.password && this.state.passwords.currentPassword ){
            confirmPasswordError = 'Invalid password';
        }

        //update error state if there are any errors
        this.setState( prevState => {
           return {
              error : {
                  //unpacking
                        ...prevState.error.newPasswordError, newPasswordError,
                        ...prevState.error.confirmPasswordError, confirmPasswordError,
                        ...prevState.error.currentPasswordError, currentPasswordError
                      }
           }
       })

       //return false if any errors exist
       if(newPasswordError || confirmPasswordError || currentPasswordError ){
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

        //console.log(this.state)
        if(isValid){
            //pass back the updated password
            this.props.updatePassword(this.state.passwords)
            this.setState({success: true})
        }
    }

    render(){
        //console.log(this.state)
        return(
            <div className = "RegisterPage-form-container">
                <h3>Update Password</h3>

                <form className = "RegisterPage-form" onSubmit={this.handleSubmit}>

                    {/* New Password -- calls handleChange() method when user types to update state */}
                    <Input
                        title ="New Password:"
                        name={"newPassword"}
                        type = "password"
                        value = {this.state.passwords.newPassword}
                        onChange = {this.handleChange}
                    />
                    <Error>{this.state.error.newPasswordError}</Error>

                    {/* Current Password -- calls handleChange() method when user types to update state */}
                    <Input
                        title ="Current Password:"
                        name={"currentPassword"}
                        type = "password"
                        value = {this.state.passwords.currentPassword}
                        onChange = {this.handleChange}
                    />
                    <Error>{this.state.error.currentPasswordError}</Error>
                    <Error>{this.state.error.confirmPasswordError}</Error>
                    <Success success = {this.state.success} >Password Updated</Success>
                    <br/>


                    {/* When submit button is clicked, the form calls handleSubmit */}
                    <Button
                        type={"submit"}
                        value = {"Submit"}
                        title = "Update Password"
                    />
                </form>
            </div>

        );
    }
}

export default PasswordForm;
