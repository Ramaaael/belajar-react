import React from "react";

const AuthLayout = (props) => {
    const {children, title} = props; 
    return (
        <div className="form">
        <div className="head">
            <h1>{title}</h1>
        </div>
    <div className="form-1">
            {children}
        </div>
    </div>
    )
}

export default AuthLayout;