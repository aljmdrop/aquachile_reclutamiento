function BtnAccion(){

    function alerta() {
        alert('hola');
    }

    return(
        <div>
            <button onClick={alerta}>boton hola con alerta</button>
        </div>
    )

}

export default BtnAccion;