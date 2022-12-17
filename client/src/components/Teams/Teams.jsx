import React from "react";
import { useState } from "react";
import '../../estilos/nav.css';

export default function Teams({setTeam, team}){

    let [team1, setTeam1] = useState(false)
    let [team2, setTeam2] = useState(false)
    // let [conf, setConf] = useState(undefined)

    function t1(){
        if (team1 || team === 'm') {
            setTeam1(false)
            setTeam2(false)
            setTeam('')
            // setConf(undefined)
        }
        else {
            setTeam1('m')
            setTeam2(false)
            setTeam('m')
            // setConf(undefined)
        }
    };

    function t2(){
        if (team2 || team === 't') {
            setTeam2(false)
            setTeam1(false)
            setTeam('')
            // setConf(undefined)
        }
        else {
            setTeam2('t')
            setTeam1(false)
            setTeam('t')
            // setConf(undefined)
        }
    };

    // function confirm(){
    //     let Team= team1 || team2;
    //     setTeam(Team)
    // };

    return (
        <div>
            Seleccioná el equipo al cual pertenecés:
            <br></br>
            <br></br>
            <div className="check1" onClick={()=>t1()} id={team1 || team==='m' ? 'selected': ''}>Microinformática<input type='checkbox' checked={team1 || team==='m' || false} onChange={()=>t1()}/></div>
            <br></br>
            <div className="check2" onClick={()=>t2()} id={team2 || team==='t'? 'selected': ''}>Telecomunicaciones<input type='checkbox' checked={team2 || team==='t' || false} onChange={()=>t2()}/></div>
            <br></br>
            {/* <button className="beginbutton" onClick={confirm} > Confirmar y comenzar </button> */}
        </div>
    )
}