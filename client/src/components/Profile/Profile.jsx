import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Nav2 from "../Nav/Nav2";

export default function Profile (){
    
    let user= useSelector(state => state.user);
    let admin = useSelector(state=> state.admin); 
    
    let hist = useHistory()
    
    console.log('commp begin ','user: ', user, 'admin: ', admin)
    let Team= user.teamId === 1 ? 'Microinformática' : user.teamId === 2 ? 'Telecomunicaciones' : ''
    
    if((user && !user.id) && (admin && !admin.id)){
        hist.push('/begin')
    }


    return (
        <div>
            <Nav2 profDis initDis />
            <div className="content">
                <b><p>{Object.keys(user) && user.username || Object.keys(admin) && admin.adminname}, bienvenido a la plataforma de relevamiento de los equipos informáticos.</p></b>
                <br></br>
                {/* Seleccioná el equipo al cual pertenecés: */}
                <p><b>{Object.keys(admin).length > 0 && 'Tu rol: Administrador'}</b></p>
                {Object.keys(user).length > 0 && 'Tu rol: Usuario'}
                <br></br>
                {Object.keys(user).length > 0 && `Tu equipo: ${Team}`}
                <br></br>
                <br></br>
                {/* <div className="check1" onClick={()=>t1()} id={team1 ? 'selected': ''}>Microinformática<input type='checkbox' checked={team1} onChange={()=>t1()}/></div>
                <br></br>
                <div className="check2" onClick={()=>t2()} id={team2 ? 'selected': ''}>Telecomunicaciones<input type='checkbox' checked={team2} onChange={()=>t2()}/></div>
                <br></br> */}
                {/* {Object.keys(user).length > 0 &&
                <button className="beginbutton" onClick={confirm} > Iniciar una visita </button>} */}
            </div>
        </div>
    )
}