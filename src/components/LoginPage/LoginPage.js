import React, { Component } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom'



class LoginPage extends Component{
    /*  https://dev.to/judearasu/change-the-document-title-on-react-application--4dgo
         - sets the title of my page
     */
    componentDidMount() {
      document.title = 'Sign In | CSP Store';
    }

    //prints the data from the form submission
    onSubmit = (data) => {
        console.log("Login page submitted: " , data)
    };

    render() {
      return (
        <div className="LoginPage">
          <h2 className= "App-header">Returning Customer</h2>
          //pass the form date to the o
          <LoginForm onSubmit={data => this.onSubmit(data)} />
        </div>
      );
    }
}



class LoginForm extends Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    //Referenced: https://www.youtube.com/watch?v=qH4pJISKeoI
    //will likely need to track error state?
    state = {
        username: '',
        password:'',
    }


    // the change function is built to track changes on the form fields
    // and will update the state variables when any of the fields are changed.
    handleChange(e){
        console.log(e);
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    // This is outputting the state of our fields to the console for now.
    // We are not connected to a databse for updating any data at this point
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

//Generic Button
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

//Generic input field
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
