import React from 'react';

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
function Input(props){
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

export default Input;
