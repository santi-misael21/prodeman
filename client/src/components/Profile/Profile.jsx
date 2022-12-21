import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Nav2 from "../Nav/Nav2";

export default function Profile (){
    
    let user= useSelector(state => state.user);
    let admin = useSelector(state=> state.admin); 
    
    let hist = useHistory()
    
    // console.log('commp begin ','user: ', user, 'admin: ', admin, user)
    let Team= user.teamId === 1 ? 'Microinformática' : user.teamId === 2 ? 'Telecomunicaciones' : ''
    
    if((user && !user.id) && (admin && !admin.id)){
        hist.push('/begin')
    }


    return (
        <div>
            <Nav2 profDis initDis />
            <div className="content">
                <b><p className="help">{Object.keys(user) && user.username || Object.keys(admin) && admin.adminname}, bienvenido a la plataforma de relevamiento de los equipos informáticos.</p></b>
                <br></br>
                <p><b className={admin.id && "help"}>{Object.keys(admin).length > 0 &&  typeof admin === 'object' && 'Tu rol: Administrador'}</b></p>
                <p><b className={user.id && "help"}>{Object.keys(user).length > 0 &&  typeof user === 'object' && 'Tu rol: Usuario'}</b></p>
                <br></br>
                <p><b className={user.id && "help"}>{Object.keys(user).length > 0 && `Tu equipo: ${Team}`}</b></p>
                <br></br>
            </div>
        </div>
    )
}