import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import '../../estilos/visits.css';
import { getVisitByID } from "../../redux/actions";

export default function Visits({Closed, /*Closing_date,*/ Id, Opening_date, Team}){

    // LOCAL:
    let [called, setCalled] = useState(false)

    // HOOKS:
    let history = useHistory()

    // REDUX:
    let dispatch = useDispatch()
    let visit = useSelector(state=> state.visit)

    // console.log(visit)

    function see() {
        if(!called){
            dispatch(getVisitByID(Id))
            setCalled(true)
        }
    }

    useEffect(()=>{
        if(visit.id === Id && called){
            history.push('/check')
        }
    }, [visit])

    return (
        <div className="visit">
            <div className="left">
                <p id="team">Equipo relevador: {Team}</p>
                <p id="date">Fecha de apertura: {new Date(Opening_date).toLocaleString().slice(0,-3)}</p>
                <p id="id">ID: {Id}</p>
            </div>
            <div className="middle" id={Closed? 'green':'red'}>
                Estado: {Closed? 'Cerrada' : 'Abierta'}
            </div>

            <button className="right" onClick={see}>
                Ver
            </button>
        </div>
    )
}