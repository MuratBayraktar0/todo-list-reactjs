import React from 'react';
import "../style/style.css"

function Input(props) {
    return (
        <div className="input-wrap">
            <div className="input-border">
                {props.image ? <img src={props.image} height="20px" className="input-image" alt={props.image + "-button"} /> : <></>}
                <input className="input" placeholder={props.placeholder} type={props.type} onChange={props.onChange} />
            </div>
        </div>
    );
}

export default Input;