import React from 'react';
import Label from './Label';
import Input from './Input';
import "./components/index.css"

const InputForm = (props) => {
    const {label, type, placeholder, name} = props;
    return (
        <div className='form-group'>
            <Label htmlFor={name}>{label}</Label>      
            <Input
            type={type}
            placeholder={placeholder}
            name={name}
            />   
        </div>
    )
}

export default InputForm;