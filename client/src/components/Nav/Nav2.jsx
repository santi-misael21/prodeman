import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logOut } from "../../redux/actions";

export default function Nav2(){
    
    let [displ, setDispl] = useState(false)

    //Redux: 

    const disp = useDispatch()
    const hist = useHistory()

    function help(){
        hist.push('/help')
    }

    function list(){
        hist.push('/list')
    }

    function init(){

    }

    function prof(){

    }

    function close(){
        localStorage.clear()
        disp(logOut())
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
            
                <div onClick={help} id="nav1">
                    {'Ayuda'}
                </div>
            {/* <Link to='/list'> */}
                <div  onClick={list} id="nav2">
                    {'Visitas'}
                </div>
            {/* </Link>
            <Link to='/' > */}
            
                {/* <div onClick={init} id="nav4">
                    {'Iniciar visita'}
                </div>
                <div onClick={prof} id="nav5">
                    {'Mi perfil'}
                </div> */}
                <div onClick={close} id="nav3">
                    {'Cerrar sesión'}
                </div>
            {/* </Link>  */}
            {/* 🔽 */}
        </div>
    )
};