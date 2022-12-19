import React from "react";
// import '../estilos/nav.css';

export default function Nav({Team, Opening_date, Id, Closed, load, noparams}){

    return (
        <div className={!noparams ? "nav1" : ""}>{ !noparams ?
            <div>
                <b>Datos de la visita</b>
                {/* <br /> */}
                <div className="teamcolor"><label>Equipo: {load? 'Cargando...': Team }</label></div>
                {/* <br></br> */}
                <div className="datecolor"><label>Fecha de inicio: {load? 'Cargando...': new Date(Opening_date).toLocaleString().slice(0,-3)+' hs'}</label></div>
                {/* <br></br> */}
                <div className="idcolor"><label>Id: {load? 'Cargando...': Id}</label></div>
                {/* <br></br> */}
                <div className="closedcolor"><label>Estado: {load? 'Cargando...': Closed? 'Cerrada':'Abierta'}</label></div>
            </div>: false
            }
        </div>
    )
}