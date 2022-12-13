import React from "react";
import '../estilos/nav.css';

export default function Nav({Team, Opening_date, Id, Closed, load, noparams}){

    return (
        <div className="nav">{ !noparams ?
            <div>
                <b>Datos de la visita</b>
                <br />
                <label>Equipo: {load? 'Cargando...': Team }</label>
                <br></br>
                <label>Fecha de inicio: {load? 'Cargando...': new Date(Opening_date).toLocaleString().slice(0,-3)+' hs'}</label>
                <br></br>
                <label>Id: {load? 'Cargando...': Id}</label>
                <br></br>
                <label>Estado: {load? 'Cargando...': Closed? 'Cerrada':'Abierta'}</label>
            </div>:
            <div>
                sin params
            </div>
            }
        </div>
    )
}