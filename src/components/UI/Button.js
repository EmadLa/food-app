import React from "react";

const Button = (props) => {
    return (
        <button
            className={props.className}
            onClick={props.onClose}
        >{props.name}
        </button>);
};

export default Button;