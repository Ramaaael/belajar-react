import React from "react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FromLogin = ()=> {
    return (
        <form action="">
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
        <Button>Login</Button>
    </form>
    );
};

export default FromLogin;