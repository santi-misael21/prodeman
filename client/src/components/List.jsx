import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { getAllVisits, getVisitsByuserId } from "../redux/actions";
// import Nav2 from "./Nav/Nav2";
import Visits from "./Visits/Visits";

export default function List({user, admin}){

    let dispatch = useDispatch()
    let visitsList = useSelector(state=> state.visitsList)
    // let user = useSelector(state=> state.user)
    // let admin = useSelector(state=> state.admin)

    // console.log( user)

    useEffect(()=>{
        if(user.hasOwnProperty('id')){
            dispatch(getVisitsByuserId(user.id))
        }
        if(admin.hasOwnProperty('id')){
            dispatch(getAllVisits())
        }
    },[user, admin])

    // if(visitsList.length) console.log(visitsList)

    return (
        <div>
            {/* <Link to='/'>
                <button>
                    Volver al inicio
                </button>
            </Link> */}
            {/* <Nav2/> */}
            {visitsList.length ? 
            <div className="visits">
                {visitsList.map((v,i)=><Visits Id={v.Id} Opening_date={v.Opening_date} Closed={v.Closed} Closing_date={v.Closing_date} Team={v.Team} key={i}/>
                )}
            </div>:
            <div style={{fontSize: '12px'}}>
                No hay visitas para mostrar
            </div>
            }
        </div>
    )
};