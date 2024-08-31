import React from 'react';
import "./components/index.css"

const Button = (props)=>{
    const {children} = props;
    return(
        <button className="button" type="submit">{children}</button>
    )
}
export default Button;