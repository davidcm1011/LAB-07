import { useState } from "react";

export const Buttonhace = props => {

    const { text } = props; 
    const { text1 } = props; 
    const[count, setCount] = useState(0);

    function handlerButton() {
        setCount(count + 1);
    }
    function alertButton () {
        if(count % 2 == 0){
            alert(count + ' es par ')
        }
        else{
            alert(count + ' es impar ')
        }
    }

    return(
        <div>
            <button onClick={ handlerButton }>
                { text } { count }
            </button>
            <br></br>
            <button onClick={ alertButton }>
                { text1 } 
            </button>
        </div>
        
    );
}