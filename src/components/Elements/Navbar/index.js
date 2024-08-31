import React from "react";
import "./components/index.css";

const Navbar = (props) => {
    const { children = "...", variant = "default" } = props;
    return (
        <div>
            <li>
                <a href="#" className={`text-nav ${variant}`}>
                    {children}
                </a>
            </li>
        </div>
    );
};

export default Navbar;
