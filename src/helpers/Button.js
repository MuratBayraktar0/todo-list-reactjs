import React from 'react';
import "../style/style.css"

function Button(props) {
    return (
        <div className={props.image ? "image-button" : "button"} onClick={props.onClick}>
            {props.image ? <img src={props.image} height="20px" alt={props.image + "-button"} /> : <></>}
            {props.children}
        </div>
    );
}

export default Button;