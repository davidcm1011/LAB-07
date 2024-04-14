import { useState } from "react";

export const Eventmirror = () => {

    const[text, setText] = useState("");

    function Writting (event) {
        setText(event.target.value); 

    }

    return(
        <div>
            <input onChange={Writting} />   
              
            <p>Reflecting:{ text }</p> 
        </div>
    );
}