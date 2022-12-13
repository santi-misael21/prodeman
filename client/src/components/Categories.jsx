import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cats_subs, getLastVisit, getVisitByID, writeCategories, writeCats, writeSubs } from "../redux/actions";
import { CATEGORIES, CreateCatsRequired, SUBCATEGORIES, } from "./Data";
import Item from "./Item";
import Nav from "./Nav";
import Pages from "./Pages";
import '../estilos/categ.css';
import { useState } from "react";
import { DefinePages, Detection } from "./Item/Item";
import { Link } from "react-router-dom";


export default function Categories(){

    let existents= CATEGORIES
    let existentsSubcats= SUBCATEGORIES
    let catsRequired= CreateCatsRequired(existents)
    
    // Local:
    let [send, setSend] = useState(false)
    let [rslt, setRslt] = useState(null)
    let [completed, setCompleted] = useState([])
 
    // Redux:
    const disp = useDispatch();

    let categories = useSelector(state=>state.categories)
    let subcategories = useSelector(state=>state.subcategories)
    let visit = useSelector(state=>state.visit)
    let go = useSelector(state=> state.actualPage) // Es acá donde usarlo: <Categories/>
    let okPages = useSelector(state=> state.statusPages)
    let user = useSelector(state=> state.user)
    let admin = useSelector(state=> state.admin)
	let catsubcatIds = useSelector(state=> state.cat_sub_related)

    // La function que dice si en la visit hay notations o no: hasta que no tenga result <Item/> no aparece
    if(rslt===null)setRslt(Detection(visit, catsRequired))
    console.log('rslt', rslt)
    // console.log('pages para ver si cambia y puedo anclar un useEffect, ideas grandes que salían desde los primero días', go)

    // Esta es la magistralidad que servirá para el perfil de Admin, acá no me deja guardar los valores:
    useEffect(()=>{ 
        if(admin.hasOwnProperty('id')){
            if(visit.id && rslt !== null){
                disp(getVisitByID(visit.id))
            }
        }
    },[go]);

    useEffect(()=>{
        setRslt(Detection(visit, catsRequired))
        // setSend(true)
    },[visit])

    // console.log('visit.team', visit.team)

    /* CATEGORIES SEARCH */    
    useEffect(() => {
        disp(writeCats(existents));
    }, []); 
    /* SUBCATEGORIES SEARCH */
    useEffect(() => {
        disp(writeSubs(existentsSubcats));
    }, []); 
    /* UPLOAD ARRAY FOR THE EVALUATION TO REDUX */
    useEffect(() => {
        if(rslt){
            disp(writeCategories(rslt));
        } // WRITE -> prop categories
    }, []);     
    /* IF CATS AND SUBS ARE IN DB, THEN SEND AN ARRAY TO MAKE RELATIONS n * m */
    
    useEffect(()=>{
        // if(categories.length && subcategories.length ){
            // if(!visit.id){
            disp(cats_subs(catsRequired))
        // };}
    },[]);
    
    // useEffect(()=>{
    //     // if(catsVisits.length && !catsVisit.id) { 
    //     //     console.log('cuantas veces llamaron')
    //         disp(getLastVisit())  // Que se llame sí o sí
    //     // }
    // },[])

    // ÜLTIMA FORMA DE LLAMAR A ITEM
    let keysArranged= []
    let valuesArranged= []
    let predilect
    if(rslt){
        predilect = rslt
    }
    if(!rslt){
        predilect = catsRequired
    }
    for(let bucle in predilect[go]){
        keysArranged.push(bucle)
        valuesArranged.push(predilect[go][bucle])
    };

    console.log('keysarrangd',keysArranged,'valuesarrangd',
        valuesArranged, visit)

    useEffect(()=>{
        if(rslt){
            console.log('IMPORTANT, VER QUÉ CARAJO ES rslt AHORA: ', rslt)
            let o= {categories: rslt}
            setCompleted(DefinePages(o))
        }
    }, [visit, rslt]);

    return (
        <div>
            { visit && Object.keys(visit).length && visit.id?
            <Nav Id={visit.id} Opening_date={visit.date} Closed={visit.closed} Team={visit.team} />:
            <Nav load={true}/>
            }

            <Link to='/begin'> <u>Volver</u>
            </Link>
            
            {completed.length > 0 && 
                <Pages completed={completed} />
            }

            { rslt && 
            <div className="cards">
                {rslt && keysArranged.slice(1,keysArranged.length).map((k,i)=><Item 
                    category={rslt[go].name} 
                    subcategory={keysArranged[i+1]} 
                    includePhoto={rslt[go][keysArranged[i+1]].hasOwnProperty('photo')} 
                    key={i+1} 
                    go={go} 
                    userid={user.id}
                    notation={visit.categories[go][keysArranged[i+1]]}
                    visit={[visit]}
                />)}
            </div>}
            { !rslt && visit && visit.categories.length && 
                <div className="cards">
                {catsRequired && keysArranged.slice(1,keysArranged.length).map((k,i)=><Item 
                    category={catsRequired[go].name} 
                    subcategory={keysArranged[i+1]} 
                    includePhoto={catsRequired[go][keysArranged[i+1]].hasOwnProperty('photo')} 
                    key={i+1} 
                    go={go} 
                    userid={user.id}
                    notation={visit.categories[go][keysArranged[i+1]]}
                    visit={[visit]}
                />)}
            </div>}

            {completed.length > 0 && 
                <Pages completed={completed} />
            }

        </div>
    )
};