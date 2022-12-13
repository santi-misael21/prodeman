import React from "react";
import { useState } from "react";
import Teams from "../Teams/Teams";
import { verifName, verifPass } from "./Errors";
import '../../estilos/begin.css';
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin, loginUser, postAdmin, postTeams, postUser } from "../../redux/actions";
import { useEffect } from "react";
import Nav from "../Nav";
import { Link, useHistory } from "react-router-dom";
import { abled } from "./Disabled";
import { TEAMS } from "../Data";

export default function Logup(){

    let teamtext= 'Seleccionar equipo';
    
    //Imported const:
    let allTeams = TEAMS

    // Local:
    let [foradmin, setAdmin] = useState(false)
    let [foruser, setUser] = useState(true)
    let [actualrole, setActualrole] = useState([undefined, undefined])
    let [thereisuser, setThereisuser] = useState(false)
    let [thereisadmin, setThereisadmin] = useState(false)
    let [tologin, setTologin] = useState(!false)
    let [tologup, setTologup] = useState(!true)
    let [team, setTeam] = useState('')
    let [input, setInput] = useState({
        username: '',
        password: '',
        teamname: '',
    });
    let [errors, setErrors] = useState({
        n: 'Ingresar nombre',
        p: 'Ingresar contraseña',
        t: teamtext,
    });

    // Redux: 
    const hist = useHistory()
    const dispatch = useDispatch()

    useEffect(()=>{
        let role = foruser? 'usuario': foradmin? 'administrador' : ''
        let invrole = foruser? 'administrador': foradmin? 'usuario' : ''
        setActualrole([role, invrole])
    }, [foruser, foradmin]);

    useEffect(()=>{
        dispatch(postTeams(allTeams))
    },[]);

    useEffect(()=>{
        console.log(team)
        let completeTeamname = team === 't' ? 'Telecomunicaciones' : team === 'm' ? "Microinformática" : ""
        setInput({...input, teamname: completeTeamname})
        if(team){
            setErrors({...errors, t: false})
        }
        else setErrors({...errors, t: teamtext})
    },[team]);

    let user = useSelector(state=> state.user)
    let admin = useSelector(state=> state.admin)
    console.log('user: ', user, 'admin: ', admin)

    if(Object.keys(user).length && user.id && !thereisuser) {
        setThereisuser(true)
    }
    if(Object.keys(admin).length && admin.id && !thereisadmin) {
        setThereisadmin(true)
    }

    useEffect(()=>{
        if(thereisuser || thereisadmin){
            hist.push({
                pathname: '/begin',
            }); 
            setThereisuser(false)
        }
    },[thereisuser, thereisadmin]);

    function change(v){
        let val= v.target.value;
        let nam= v.target.name
        setInput({
            ...input,
            [nam]: val
        })
        if(nam==='username') setErrors({...errors, n: verifName(val)})
        else if(nam==='password') setErrors({...errors, p: verifPass(val)})
    }
    
    //Here team consologs twice
    function disab(){
        return abled()
    }

    function submit(){ // user = {teamname, username, password,}
        let toDispatchPost, toDispatchLog, nam
        if(foruser) {
            toDispatchPost = postUser
            toDispatchLog = loginUser
        }
        else if (foradmin) {
            toDispatchPost = postAdmin
            toDispatchLog = loginAdmin
        }

        if(tologup){
            dispatch(toDispatchPost({
                teamname: input.teamname,
                adminname: input.username,
                username: input.username,
                password: input.password,
            }))
        }
        else if(tologin){
            dispatch(toDispatchLog({
                adminname: input.username,
                username: input.username,
                password: input.password,
            }))
        }
    }

    function login(){
        setTologin(!tologin)
        setTologup(!tologup)
    }

    function changeRol(){
        setUser(!foruser)
        setAdmin(!foradmin)
    }

    return (
        <div>
            <Nav noparams={true}/>
            <div className="upbody">

                <div className="upleft">
                    <p className="text">
                        Bienvenido a la plataforma de relevamiento de los equipos informáticos
                    </p>
                </div>

                <div className="upright">

                    <div className="changerol">
                        <div className="headerright">
                            {tologup? <h4>Registrate</h4> : <h4>Ingresá</h4>}{'como ' + actualrole[0]}
                        </div>
                        <button className="buttonrol" onClick={changeRol}>Soy {actualrole[1]}</button>
                    </div>

                    <div>Nombre</div>
                    <input  
                        className="beginbutton" 
                        placeholder='Nombre' 
                        name="username" 
                        value={input.username} 
                        onChange={(e)=>change(e)}
                    />
                    <div className={errors.n ? "errors" : "noterr"} >
                        {errors.n? errors.n : 'ok'}
                    </div>

                    <div>Contraseña</div>
                    <input  
                        className="beginbutton" placeholder='Contraseña' 
                        type='password' name="password" 
                        value={input.password} onChange={(e)=>change(e)}
                    />
                    <div className={errors.p ? "errors" : "noterr"} >
                        {errors.p? errors.p : 'ok'}
                    </div>
                    
                    { tologup && foruser &&
                    <div>
                        <Teams setTeam={setTeam} />
                        <div className={errors.t ? "errors" : "noterr"} >{errors.t? teamtext : 'ok'} </div>
                        <br></br>
                    </div> }

                    <button className="beginbutton" onClick={submit}  disabled={disab()}>
                        {tologup?'Crear perfil':'Ingresar'}
                    </button>

                    <p>{tologup? '¿Ya' : '¿Todavía no'} tenés una cuenta?</p>

                    <u onClick={login} style={{color:"orangered", cursor:'pointer'}}>
                        {tologup?'Ingresar':tologin?'Registrarme':''}
                    </u>
                </div>
            </div>
        </div>
    )
};