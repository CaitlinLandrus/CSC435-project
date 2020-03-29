import React from 'react';
import '../FormFields/FormField.css'

/*
Generic Button
    parameters:
        -props.type - type of button
        -props.value - value of button
        -props.action - onClick action handler
        -props.title - Label for button
    returns: button with given parameters
*/
function Button(props) {
    return(
        <button
            className = 'generic-button'
            type= {props.type}
            value= {props.value}
            onClick= {props.action}
        >
            {props.title}
        </button>)
};

export default Button;
