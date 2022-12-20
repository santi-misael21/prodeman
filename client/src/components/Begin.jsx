import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
import { getVisitID, loginAdmin, loginUser } from "../redux/actions";
import { useEffect } from "react";
import Nav2 from "./Nav/Nav2";
import List from "./List";

export default function Begin(){

    //Local:
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
        // console.log(designed)
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
            // password: localStorage.password, //AHORA LA IMPLICITO, pero hay que hacer que mediante localStorage el back no pida password, siendo el localStorage un aval de que el user o admin puede pasar 
        }))

    }

    // console.log('commp begin ','user: ', user, 'admin: ', admin)
    let Team= user.teamId === 1 ? 'Microinformática' : user.teamId === 2 ? 'Telecomunicaciones' : ''

    useEffect(()=>{
        if(conf){
            // console.log('conf confirmado', conf)
            let Opening_date= new Date();

            disp(getVisitID({Team, Opening_date, Closed: false, userId: user.id}))

            hist.push({
                pathname: '/check',
            }); 
        }
    },[conf])

    // console.log(s)

    function confirm(){
        setConf(true)
    }

    return (
        <div className="begin">
            <Nav2 confirm={confirm} vissDis/>
            <List user={user} admin={admin}/>
        </div>
    )

}