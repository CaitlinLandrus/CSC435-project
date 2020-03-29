import React from 'react';

function Select(props){
    return(
        <div>
            <label htmlFor={props.name}>{props.title}</label>
            <br/><br/>
            <select
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            >
            <option value="" disabled>{props.placeholder}</option>
            {props.options.map(option => {
                return(
                    <option
                        key={option}
                        value={option}
                        label={option}
                    >{option}
                    </option>
                );
            })}
            </select>
        </div>
    )
}

export default Select;
