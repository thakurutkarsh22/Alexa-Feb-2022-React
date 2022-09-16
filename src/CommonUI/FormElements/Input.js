import React from 'react';
import './Input.css';

function Input(props, InputRef) {
    let {name, placeholder} = props;

    
    return (
        <div className="beauty">
            <label>{name}</label>
            <input {...props} ref={InputRef} />
        </div>
    )
}

export default React.forwardRef(Input);