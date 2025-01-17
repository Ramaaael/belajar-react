import React from "react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button"

const FromRegister = ()=> {
    return (
        <form action="">
        <InputForm 
        label="Fullname"
        type="text" 
        placeholder="insert your name here..." 
        name="fullname" />

        <InputForm 
        label="Email"
        type="email" 
        placeholder="example@mail.com" 
        name="email" />
        
        <InputForm 
        label="Password"
        type="password" 
        placeholder="******" 
        name="password" />

        <InputForm 
        label="Confirm Password"
        type="password" 
        placeholder="******" 
        name="confirmPassword" />
        <Button>Register</Button>
    </form>
    );
}

export default FromRegister;