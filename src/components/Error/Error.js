import React, { Component } from 'react';
import './Error.css';
//example of children props
class Error extends Component{
    render(){

        return(
            <div className = "errorMessage">
                {this.props.children}
            </div>
        )
    };
}

export default Error;
