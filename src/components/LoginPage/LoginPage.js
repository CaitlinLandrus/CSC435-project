import React, { Component } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom'



class LoginPage extends Component{
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
    //Referenced: https://www.youtube.com/watch?v=qH4pJISKeoI
    state = {
        username: '',
        password:'',
    }


    // the change function is built to track changes on the form fields
    // and will update the state variables when any of the fields are changed.
    change = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    // This is outputting the state of our fields to the console for now.
    // We are not connected to a databse for updating any data at this point
    onSubmit = e =>{
        //prevent default prefents the default behavior or refreshing the page on submit
        e.preventDefault()
        this.props.onSubmit(this.state) //passes the state to the LoginPage
        //console.log(this.state)
    }

    render(){
        return(
            <div className = "LoginPage-form-container">
                <h3>SIGN IN</h3>

                <form className = "LoginPage-form">
                    <label >Username: </label><br/>
                    {/* Username */}
                    <input
                        type="text"
                        id = "username"
                        name = "username"
                        value={this.state.firstName} // starts as empty string
                        onChange={e => this.change(e)} // updates the state with the change function
                    />
                    <br/>

                    {/* Password */}
                    <label>Password: </label><br/>
                    <input
                        type="password"
                        id = "password"
                        name = "password"
                        value={this.state.password} // starts as empty string
                        onChange={e => this.change(e)} // updates the state with the change function
                    /><br/>

                    {/* Execute the onSubmit() function we defined above */}
                    <button type = "submit" value = "Submit" onClick={e=>this.onSubmit(e)}>Sign In</button>
                </form>

                <div className = "createAccount">
                    <p>Not registered? <span> </span><Link to="/register" className = 'create-account-link'>Create an account</Link> </p>
                </div>
            </div>

        );
    }
}

export default LoginPage;
