import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logOut } from "../../redux/actions";

export default function Nav2({confirm, helpDis, vissDis, profDis, initDis}){
    
    let [displ, setDispl] = useState(false)

    //Redux: 

    const disp = useDispatch()
    const hist = useHistory()
    
    let user = useSelector(state=> state.user); 
    let admin = useSelector(state=> state.admin); 

    function help(){
        hist.push('/help')
    }

    function list(){
        hist.push('/begin')
    }

    // function init(){

    // }

    function prof(){
        hist.push('/profile')
    }

    function close(){
        localStorage.clear()
        disp(logOut())
        hist.push('/')
    }

    function display(){
        setDispl(!displ)
    }

    return (
        <div className="nav" id={displ?'displ':'responsive'}>
                <div className="divham" onClick={display} >
                    <div id="ham"/>
                    <div id="ham"/>
                    <div id="ham"/>
                </div>
                <div onClick={!helpDis ? help : undefined} id={helpDis? 'divdis':"nav1"}>
                    {'Ayuda'}
                </div>
                <div  onClick={!vissDis? list : undefined} id={vissDis? 'divdis':"nav2"}>
                    {'Visitas'}
                </div>
            
                <div onClick={(user && user.id )|| !initDis? confirm : undefined} id={(admin && admin.id) || initDis? 'divdis':"nav4"}>
                    {'Iniciar visita'}
                </div>
                <div onClick={!profDis ? prof : undefined} id={profDis? 'divdis':"nav5"}>
                    {'Mi perfil'}
                </div>
                <div onClick={close} id="nav3">
                    {'Cerrar sesión'}
                </div>
            {/* 🔽 */}
        </div>
    )
};