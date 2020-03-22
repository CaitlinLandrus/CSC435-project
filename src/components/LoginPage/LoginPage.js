import React, { Component } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom'

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
    componentDidMount() {
      document.title = 'Sign In | CSP Store';
    }

    /**
    * prints the data from the form submission
    * parameters:  Data from form
    * output: writes to console console.log
    */
    onSubmit = (data) => {
        console.log("Login page submitted: " , data)
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



class LoginForm extends Component{

    /** Form Constructor */
    constructor(props) {
        super(props);

        //Referenced: https://www.youtube.com/watch?v=qH4pJISKeoI
        //will likely need to track error state?
        this.state = {
            username: '',
            password:'',
        }

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
    handleChange(e){
        console.log(e);
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    /*  This is outputting the state of our fields to the console for now.
        We are not connected to a databse for updating any data at this point

        Parameter: submit event
        Output: none
        Result: passes the state to parent via props, resets state to empty fields
    */
    handleSubmit(e){
        //prevent default prefents the default behavior or refreshing the page on submit
        e.preventDefault()
        this.props.onSubmit(this.state) //passes the state to the LoginPage
        //console.log(this.state)

        //resets the fields to blank
        this.setState({
            username: '',
            password:'',
        })
    }

    render(){
        return(
            <div className = "LoginPage-form-container">
                <h3>SIGN IN</h3>

                <form className = "LoginPage-form" onSubmit={this.handleSubmit}>

                    {/* Username -- calls handleChange() method when user types to update state */}
                    <Input title ="Username:" name={"username"} type = "text"  value = {this.state.username} onChange = {this.handleChange}/>
                    <br/>

                    {/* Password  -- calls handleChange() method when user types to update state*/}
                    <Input title ="Password:" name={"password"} type = "password"  value = {this.state.password}  onChange = {this.handleChange}/>
                    <br/>

                    {/* When submit button is clicked, the form calls handleSubmit */}
                    <Button type={"submit"} value = {"Submit"}  title = "Sign In"/>

                </form>

                <div className = "createAccount">
                    <p>Not registered? <span> </span><Link to="/register" className = 'create-account-link'>Create an account</Link> </p>
                </div>
            </div>

        );
    }
}

//Referenced https://www.codementor.io/@blizzerand/building-forms-using-react-everything-you-need-to-know-iz3eyoq4y
//I will likely pull these out into their own individual JS file for reuse on the registration page

/*
Generic Button
    parameters:
        -props.type - type of button
        -props.value - value of button
        -props.action - onClick action handler
        -props.title - Label for button
    returns: button with given parameters
*/
const Button = (props) => {
    return(
        <button
            type= {props.type}
            value= {props.value}
            onClick= {props.action}
        >
            {props.title}
        </button>)
};


/*
Generic input field
    parameters:
        - props.name  - name and id of input filed
        - props.title - label for input field
        - props.type  - type of input field
        - props. value - value of input field
        - props.onChange - onChange handler
        - props.placeholder - placeholder value for input field
    returns: Input field with given parameters
*/
const Input = (props) =>{
    return(
        <div>
            <label htmlFor={props.name}>{props.title} </label>
            <br/>
            <input
            id={props.name}
            name={props.name}
            type={props.type}
            value={props.value} // starts as empty string
            onChange={props.onChange}// updates the state with the change function
            placeholder={props.placeholder}
            />
        </div>
    )
}


export default LoginPage;
