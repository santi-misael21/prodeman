import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import '../estilos/item.css';
import { /*getVisitByID,*/ postNotation, writeCategories } from "../redux/actions";
import Camera from "./Cam/Camera";
// import { CATEGORIES } from "./Data";
// import { Detection } from "./Item/Item";

export default function Item({category, subcategory, includePhoto, go, userid, notation, visit}){

	// console.log(category, subcategory, includePhoto, go, userid, notation)
	// let [saved, setSaved] = useState({val: undefined, go, category, subcategory})
	// let [editt, setEdit] = useState({val: undefined, go, category, subcategory})

	// // Redux:
	let dispatch= useDispatch()
	let admin = useSelector(state=> state.admin)
	let catsVisit = useSelector(state=> state.visit)

	function yes(){
		console.log(admin)
		if(catsVisit.closed || admin.id) return
		if(catsVisit.categories[go][subcategory].saved) return

		if(notation && notation.notation === undefined){
			catsVisit.categories[go][subcategory].notation= true
			return dispatch(writeCategories(catsVisit.categories))
		}

		else if(notation && notation.notation){
			catsVisit.categories[go][subcategory].notation= undefined
			return dispatch(writeCategories(catsVisit.categories))
		}

		else if(notation && notation.notation === false){
			catsVisit.categories[go][subcategory].notation= true
			return dispatch(writeCategories(catsVisit.categories))
		}
	};
	function no(){
		console.log(admin)
		if(catsVisit.closed || admin.id) return
		if(catsVisit.categories[go][subcategory].saved) return

		if(notation && notation.notation === undefined){
			catsVisit.categories[go][subcategory].notation= false
			return dispatch(writeCategories(catsVisit.categories))
		}
		else if(notation && notation.notation){
			catsVisit.categories[go][subcategory].notation= false
			return dispatch(writeCategories(catsVisit.categories))
		}

		else if(notation && notation.notation === false){
			catsVisit.categories[go][subcategory].notation= undefined
			return dispatch(writeCategories(catsVisit.categories))
		}
	};

	function handText(e){
		let val = e.target.value
		catsVisit.categories[go][subcategory].observations= val
		dispatch(writeCategories(catsVisit.categories))
	};

	function save(){
		if(catsVisit.closed) return
		catsVisit.categories[go][subcategory].saved= true
		let short = catsVisit.categories[go][subcategory]
		let Image= short.hasOwnProperty('photo') ? short.photo : null
		dispatch(writeCategories(catsVisit.categories))
		dispatch(postNotation({
			Note: notation.notation,
			Observations: notation.observations,
			catName: category,
			subName: subcategory,
			saved: notation.saved, // ¿Es Redux instantáneo e inmediato?
			visitId: catsVisit.id, 
			Image,
		}));
		// return setSaved({val: true,  go, category, subcategory})
	};

	function edit(){
		catsVisit.categories[go][subcategory].saved= false
		let short = catsVisit.categories[go][subcategory]
		let Image= short.hasOwnProperty('photo') ? short.photo : null
		dispatch(writeCategories(catsVisit.categories))
		dispatch(postNotation({
			Note: notation.notation,
			Observations: notation.observations,
			catName: category,
			subName: subcategory,
			saved: false,
			visitId: catsVisit.id,
			Image,
		}));
		// return setSaved({val: false,  go, category, subcategory})
	}

	return (
		<div className={notation.saved? 'itemdis': "item"}
			id={notation && notation.saved ? 'green' : 'red' }
		>
			<h6 id='cattag'>
				Categoría: {category && category}
			</h6>
			<h6 id="subtag">
				Subcategoría: {subcategory && subcategory}
			</h6>
			<br></br>
			<div className="check1" 
				id= {notation && notation.notation === true ? 'selected': ''}
					onClick={()=>yes()}>
					Sí
					<input type='checkbox' 
						checked={notation && notation.notation === true ? true : false}
						readOnly
						disabled={(catsVisit.closed) || admin.id || (notation && notation.saved) || false}
					/>
			</div>
			<br></br>
			<div 
					className="check2" 
					id={notation && notation.notation===false ? 'selected': ''}
					onClick={()=>no()}>
					No
					<input type='checkbox' 
						checked={notation && notation.notation===false ? true : false}
						readOnly
						disabled={(catsVisit.closed) || admin.id || (notation && notation.saved) || false}
					/>
			</div>
			<br></br>
			<input 
					id="in"
					className="comment" 
					onChange={(e)=> handText(e)} 
					disabled={(catsVisit.closed) || admin.id || (notation && notation.saved) || false}
					placeholder='Observaciones' 
					value={notation && typeof notation.observations === 'string' && notation.observations || ''}
			/>
			<br></br>

			{includePhoto &&
				<Camera notation={notation && notation} saved={notation && notation.saved} go={go} catName={category} subcategory={subcategory}/>}

			{!admin.id && 
			<button 
				className="buttons" 
				onClick={edit} 
				disabled = {(catsVisit.closed)||(notation && !notation.saved) || false}
				>
				Editar 
			</button>}

			{!admin.id && 
			<button 
				className="buttons" 
				onClick={save} 
				disabled = {(catsVisit.closed)||(notation && notation.saved) || (notation && notation.notation) === undefined || false}
				>
				Guardar 
			</button>}

		</div>
	)
};