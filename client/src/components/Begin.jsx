import React from "react";
import { useState } from "react";
import '../estilos/begin.css';
// import '../estilos/item.css';
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
import { getVisitID, loginAdmin, loginUser, logOut } from "../redux/actions";
import { useEffect } from "react";
import '../estilos/nav.css';
import { TEAMS } from "./Data";

export default function Begin(){

    //Local:
    // let [team1, setTeam1] = useState(false)
    // let [team2, setTeam2] = useState(false)
    let [conf, setConf] = useState(undefined)

    //Hooks:
    const hist= useHistory()

    //Redux:
    let disp= useDispatch();
    let s= useSelector(state => state.visits); // Comentá esta línea 
    let user= useSelector(state => state.user);
    let admin = useSelector(state=> state.admin);    
    
    let designed = Object.keys(user).length? user : Object.keys(admin).length ? admin : ''
    if(designed.id) {
        window.localStorage.clear()
        if(designed.hasOwnProperty('username')){
            window.localStorage.setItem('username', designed.username)
            window.localStorage.setItem('teamId', designed.teamId)
        }
        if(designed.hasOwnProperty('adminname')) {
            window.localStorage.setItem('adminname', designed.adminname)
        }
        window.localStorage.setItem('id', designed.id)
        // window.localStorage.setItem('id', designed.id)
        console.log(designed)
    }

    useEffect(()=>{
        if(!designed){
            if(!localStorage.length) {
                hist.push('/')
            }
        }
    },[]);

    if(!designed && localStorage.length){

        let toDispatchLog, obj
        if(localStorage.hasOwnProperty('username')) { 
            toDispatchLog = loginUser
            obj = {
                username: localStorage.username,
            }
        }

        else if(localStorage.hasOwnProperty('adminname')) { 
            toDispatchLog = loginAdmin
            obj = {
                adminname: localStorage.adminname,
            }
        } 

        disp(toDispatchLog({
            ...obj,
            localst: true,
            // password: localStorage.password, //AHORA LA IMPLICITO, pero hay que hacer que mediante localStorage el back no pida password, siendo el localStorage un aval de que el chabón puede pasar tranqui
        }))

    }

    console.log('commp begin ','user: ', user, 'admin: ', admin)
    let Team= user.teamId === 1 ? 'Microinformática' : user.teamId === 2 ? 'Telecomunicaciones' : ''

    useEffect(()=>{
        if(conf){
            console.log('conf confirmado', conf)
            let Opening_date= new Date();

            disp(getVisitID({Team, Opening_date, Closed: false, userId: user.id}))

            hist.push({
                pathname: '/check',
            }); 
        }
    },[conf])

    console.log(s)
    

    // function t1(){
    //     if (team1) {
    //         setTeam1(false)
    //         setTeam2(false)
    //         // setConf(undefined)
    //     }
    //     else {
    //         setTeam1('m')
    //         setTeam2(false)
    //         // setConf(undefined)
    //     }
    // }

    // function t2(){
    //     if (team2) {
    //         setTeam2(false)
    //         setTeam1(false)
    //         // setConf(undefined)
    //     }
    //     else {
    //         setTeam2('t')
    //         setTeam1(false)
    //         // setConf(undefined)
    //     }
    // }

    function confirm(){
        setConf(true)
    }

    function close(){
        localStorage.clear()
        disp(logOut())
    }

    // if(!admin.id && !user.id)

    return (
        <div className="begin">
            <div className="nav" id='navbegin'>
                <Link to='/list'>
                    <button>
                        Ver todas las visitas
                    </button>
                </Link>
                <Link to='/'>
                    <button onClick={close}>
                        {'Cerrar sesión'}
                    </button>
                </Link>
            </div>
            <div className="content">
                <h3>{Object.keys(user) && user.username || Object.keys(admin) && admin.adminname}, bienvenido a la plataforma de relevamiento de los equipos informáticos.</h3>
                <br></br>
                {/* Seleccioná el equipo al cual pertenecés: */}
                {Object.keys(admin).length > 0 && 'Eres administrador'}
                {Object.keys(user).length > 0 && 'Eres usuario'}
                <br></br>
                {Object.keys(user).length > 0 && `Tu equipo: ${Team}`}
                <br></br>
                <br></br>
                {/* <div className="check1" onClick={()=>t1()} id={team1 ? 'selected': ''}>Microinformática<input type='checkbox' checked={team1} onChange={()=>t1()}/></div>
                <br></br>
                <div className="check2" onClick={()=>t2()} id={team2 ? 'selected': ''}>Telecomunicaciones<input type='checkbox' checked={team2} onChange={()=>t2()}/></div>
                <br></br> */}{Object.keys(user).length > 0 &&
                <button className="beginbutton" onClick={confirm} > Iniciar una visita </button>}
            </div>
        </div>
    )

}