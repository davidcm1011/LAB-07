import { useState } from "react";

export const Button = props => {

    const { text } = props; 

    function alertButton() {
        alert('RandomNumber: ' 
        + Math.floor(Math.random() * 10) + 1 );
    }
    return(
        <button onClick={ alertButton }>
            { text }
        </button>
    );
}