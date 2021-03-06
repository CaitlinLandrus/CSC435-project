import React, { Component } from 'react';
import Button  from '../../FormFields/Button'
import Input  from '../../FormFields/Input'
import Error  from '../../Alert/Error'
import Success  from '../../Alert/Success'



class AccountForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            user:{
                 type: props.loggedInUser.type,
                 username: props.loggedInUser.username,
                 password:props.loggedInUser.password,
                 confirmPassword:'',
                 firstName:props.loggedInUser.firstName,
                 lastName: props.loggedInUser.lastName,
                 email: props.loggedInUser.email
            },
            error:{
                usernameError: '',
                firstNameError:'',
                lastNameError: '',
                emailError: ''
            },
            success: false,
            usernameStatus:false,
            firstNameStatus:false,
            lastNameStatus:false,
            emailStatus:false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    //when the component mounts in the UI, populate all of the fields wih the current user's data
    componentDidMount(){
        console.log("logged in user", this.props.loggedInUser.username)
        console.log("user", this.props.loggedInUser)
        /*
        //get json data with user data
        fetch('/userData.json')
        .then(res => res.json())
        //set the form state to the logged in user's information
        .then(element =>{
            //ensure a user is found (prevents errors on refresh)
            if(element.find(e => e.username === this.props.loggedInUser.username)){
                this.setState({ user: element.find(e => e.username === this.props.loggedInUser.username) } )
            }
        });
        */


        console.log("user state", this.state.user)
        /* clears the staus messages on the form after 5 seconds */
        this.timer = setInterval(
            () => {
                this.setState(prevState => ({ success: false }))
                this.setState(prevState => ({ usernameStatus: false }))
                this.setState(prevState => ({ firstNameStatus: false }))
                this.setState(prevState => ({ lastNameStatus: false }))
                this.setState(prevState => ({ emailStatus: false }))
            },
            5000,
        );


        console.log("Update User Details has mounted")
    }


    /*
    * Checks for a change in field state and updates the
    * appropriate status so a message displays to the user
    */
    componentDidUpdate(prevProps, prevState){
        if(prevState.user.username !== undefined && prevState.user.username !== this.state.user.username){
            this.setState({usernameStatus: true})
            console.log("username updated")
        }

        if(prevState.user.firstName !== undefined && prevState.user.firstName !== this.state.user.firstName){
            this.setState({firstNameStatus: true})
            console.log("first name updated")
        }

        if(prevState.user.lastName !== undefined  && prevState.user.lastName !== this.state.user.lastName){
            this.setState({lastNameStatus: true})
            console.log("last name updated")
        }

        if(prevState.user.email !== undefined && prevState.user.email !== this.state.user.email){
            this.setState({emailStatus: true})
            console.log("email updated")
        }
    }

    /* stops the timer that we set on mounting the component */
    componentWillUnmount() {
        clearInterval(this.timer);
        console.log("Update User Details Form Unmounted")
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
        let firstNameError = '';
        let lastNameError = '';
        let emailError = '';

        //reset the state back to false to keep it in sync on re-submit
        this.setState({success: false})

        //Validate Type is populated
        if(!this.state.user.type){
            typeError = 'Account Type is required';
        }

        //Validate first name is populated
        if(!this.state.user.username){
            usernameError = 'Username is required';
        }

        //Validate first name is populated
        if(!this.state.user.firstName){
            firstNameError = 'First Name is required';
        }

        //Validate first name is populated
        if(!this.state.user.lastName){
            lastNameError = 'Last Name is required';
        }

        //Validate email is populated
        if(!this.state.user.email){
            emailError = 'Email is required';
        }

        //update error state if there are any errors
        this.setState( prevState => {
           return {
              error : {
                  //unpacking
                        ...prevState.error.typeError, typeError,
                        ...prevState.error.firstNameError, firstNameError,
                        ...prevState.error.lastNameError, lastNameError,
                        ...prevState.error.emailError, emailError,
                        ...prevState.error.usernameError, usernameError,
                      }
           }
       })

       //if errors exist, return false
        if(typeError || firstNameError || lastNameError || emailError || usernameError ){
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
        if(isValid){
            //pass the state to the RegistrationPage
            this.props.updateUserAccount(this.state.user)
            this.setState({success: true})
        }
    }

    render(){
        return(
            <div className = "RegisterPage-form-container">
                <h3>Update User Details</h3>

                <form className = "RegisterPage-form" onSubmit={this.handleSubmit}>

                        {/* first name -- calls handleChange() method when user types to update state */}
                        <Input
                            title ="First Name:"
                            name={"firstName"}
                            type = "text"
                            value = {this.state.user.firstName || ''}
                            onChange = {this.handleChange}
                        />
                        <Error>{this.state.error.firstNameError}</Error>
                        <Success success = {this.state.firstNameStatus} >First Name Updated!</Success>

                        {/* last name -- calls handleChange() method when user types to update state */}
                        <Input
                            title ="Last Name:"
                            name={"lastName"}
                            type = "text"
                            value = {this.state.user.lastName || ''}
                            onChange = {this.handleChange}
                        />
                        <Error>{this.state.error.lastNameError}</Error>
                        <Success success = {this.state.lastNameStatus} >Last Name Updated!</Success>

                        {/* email -- calls handleChange() method when user types to update state */}
                        <Input
                            title ="Email:"
                            name={"email"}
                            type = "email"
                            value = {this.state.user.email || ''}
                            onChange = {this.handleChange}
                        />
                        <Error>{this.state.error.emailError}</Error>
                        <Success success = {this.state.emailStatus} >Email Updated!</Success>

                        {/* Username -- calls handleChange() method when user types to update state */}
                        <Input
                            title ="Username:"
                            name={"username"}
                            type = "text"
                            value = {this.state.user.username || ''}
                            onChange = {this.handleChange}
                        />
                        <Error>{this.state.error.usernameError}</Error>
                        <Success success = {this.state.success} >User Account Updated</Success>
                        <Success success = {this.state.usernameStatus} >Username Updated!</Success>

                        <br/>

                    {/* When submit button is clicked, the form calls handleSubmit */}
                    <Button
                        type={"submit"}
                        value = {"Submit"}
                        title = "Update User"
                    />
                </form>
            </div>

        );
    }
}


export default AccountForm;
