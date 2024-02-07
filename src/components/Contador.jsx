import React, {useState} from "react";
import "./Contador.css"


function Contador(){

    const [numero, setNumero] = useState(0)

    function Adicionar(){
        setNumero(numero + 1)
    }

    function Diminuir(){
        setNumero(numero - 1)
    }
    return(
        <>
        <h1>{numero}</h1>
        <button onClick={Adicionar}>+</button>
        <button onClick={Diminuir}>-</button>
        <button>zerar</button>
        </>
    )
}

export default Contador