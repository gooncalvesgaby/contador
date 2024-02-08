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

    function Zerar(){
        setNumero(numero - numero)
    }
    return(
        <>
        <div className="contador">
            <section>
                <div>
                    <button className="btns" onClick={Adicionar}>+</button>
                    <button className="btns" onClick={Diminuir}>-</button>
                    <button className="btns" onClick={Zerar}>zerar</button>
                </div>
                
            </section>
            <h1>{numero}</h1>      
        </div>
        </>
    )
}

export default Contador