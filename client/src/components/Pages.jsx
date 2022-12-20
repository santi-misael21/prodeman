import React /*, { useState }*/ from "react";
import { CATEGORIES } from "./Data";
// import '../estilos/pages.css';
import { useDispatch, useSelector, } from "react-redux";
import { setPage } from "../redux/actions";

export default function Pages({completed}){

    // console.log(completed)
    //Local:
    // let [go, setGo] = useState(0)

    //Redux:
    let disp= useDispatch()
    let actualPage= useSelector(state=>state.actualPage)

    // console.log(actualPage)

    let existents= CATEGORIES;

    function goto(i){
        // setGo(i)
        disp(setPage(i))
    }

    function styl (i) {
        return {
            color : actualPage===i? 'yellow':'rgb(160, 117, 43)',
            border : actualPage===i? '1px solid yellow':'',
        }
    }

    return (
        <div className="pages">
            <div className="onlybuttons">
                {existents.map((e,i)=> <button style={{color: styl(i).color, border: styl(i).border}} className="pagesbutton" id={completed[i]? 'ok': 'pend'} onClick={()=>goto(i)} key={i}>{i+1}</button>)}
            </div>
        </div>
    )

}