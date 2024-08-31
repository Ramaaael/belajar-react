import React from 'react';
const Input = (props) => {
    const {type, placeholder, name} = props;
    return (
        <input
        type={type}
        className="input"
        placeholder={placeholder}
        name={name}
        
        />
    );
}

export default Input;