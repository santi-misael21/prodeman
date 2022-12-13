import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../estilos/item.css';
import { postNotation, writeCategories } from "../redux/actions";
import { CATEGORIES } from "./Data";
import { Detection } from "./Item/Item";

export default function Item({category, subcategory, includePhoto, go, userid, notation, visit}){


	console.log(category, subcategory, includePhoto, go, userid, notation)
	// // Local:
	let [aff, setAff] = useState({})
	let [neg, setNeg] = useState({})
	// let [text, setText] = useState({})
	let [saved, setSaved] = useState({})
	let [editt, setEdit] = useState({})
	// let [send, setSend] = useState({})

	// let [detector, setDetector] = useState([])
	// let [detec, setDetec] = useState({})

	// if(!Object.keys(detectorv).length)setDetectorv({...detectorv, [category]: {[subcategory]:0}})
	// if(!Object.keys(send).length)setSend({...send, [go]: {val: false, category, subcategory}})

	// // Redux:
	let dispatch= useDispatch()
	let admin = useSelector(state=> state.admin)
	// let catsVisit = useSelector(state=> state.visit)
	// let catsVisits = useSelector(state=> state.visits) // SIN HACER MOVIMIENTOS ACÁ ADENTRO, TIENE ACTUALIZS
	// // QUIÉN TRAJO A ESTE TIPO, QUIÉN LE ENSEÑÓ LO QUE SABE, 'esa es la cuestión' escribió un tal will
	let catsVisit= visit[0]
	console.log(catsVisit, 
		// catsVisits, catsubcatIds
		)

	// console.log(Detection(catsVisit)) // false -> protocolos básicos no cumplen || undefined -> no hay acts

	// Ahora que lo pienso, tendría que mandarle a este compenente solo lo que le corresponde según sus params, para no ralentizar las cosas, y descomplicarlas quizás.

	// if(Object.keys(catsVisit).length && catsVisit.categories.length) {

	// 	let detector
	// 	for(let i=0; i< catsVisit.categories.length; i++){
	// 		for (let prop in catsVisit.categories[i]){
	// 			let not = catsVisit.categories[i][prop].notation
	// 			let obs = catsVisit.categories[i][prop].observations
	// 			if( not || obs ) {
	// 				detector = catsVisit.categories[i][prop]
	// 			}
	// 		}
	// 	}
	// 	if(detector) {
	// 		console.log('catsVisit desde adentro', catsVisit, detector)
	// 		// let provis = detector
	// 		// provis[0] = 1
	// 		// setDetector(provis)
	// 		setDetec({...detec, [category]: {[subcategory]: detector}})
	// 	}
	// }

   //  // let visits = useSelector(state=> state.visits)

   //  // if(!Object.keys(catsVisit).length && visits.length){ 
   //  //     console.log('Entré acá, no había nada loco')
   //  //     catsVisit = visits[visits.length-1]
   //  // }
   //  // console.log(catsVisit)
	let invert, invSaved

	useEffect(()=>{
		// if(Object.keys(catsVisit).length && catsVisit.id && !Object.keys(aff).length && !Object.keys(neg).length ){
		// if(catsVisits.length && Object.keys(catsVisits[catsVisits.length-1]).length && catsVisits[catsVisits.length-1].id && !Object.keys(aff).length && !Object.keys(neg).length){
		if(notation){
			if(notation.notation === undefined) invert = undefined
			if(notation.notation === false) invert = true
			if(notation.notation === true) invert = false
			if(notation.saved === undefined) invSaved = undefined
			if(notation.saved === false) invSaved = true
			if(notation.saved === true) invSaved = false

			setAff({...aff, [go]: {val: notation.notation, category, subcategory}})
			setNeg({...neg, [go]: {val: invert, category, subcategory}})
			setSaved({...saved, [go]: {val: notation.saved, category, subcategory}}) //Agrego este comando
			setEdit({...editt, [go]: {val: invSaved, category, subcategory}}) //Agrego este comando
			// setText({...text, [go]: {val: notation.observations, category, subcategory}})
		}
	},[])

	let cgyes=undefined,cgno=undefined
	if(aff[go] && aff[go].val) cgyes = aff[go].val
	if(neg[go] && neg[go].val) cgno = neg[go].val

	useEffect(()=>{
		// if(Object.keys(catsVisit).length){
			// for(let i= 0; i< catsVisit.categories.length; i++){
			// 	if(catsVisit.categories[i].name===category){

					if (aff[go] && neg[go] && !neg[go].val && !aff[go].val) { // si ambos son false
						catsVisit.categories[go][subcategory].notation= undefined
						// console.log('pre dispatch aff neg')
						dispatch(writeCategories(catsVisit.categories))
						// console.log('post dispatch aff neg')
					}

					else if(aff[go] && aff[go].val){ // si aff es true
						catsVisit.categories[go][subcategory].notation= true
						// console.log('pre dispatch aff neg')
						dispatch(writeCategories(catsVisit.categories))
						// console.log('post dispatch aff neg')
					}

					else if(neg[go] && neg[go].val){ // si neg es true 
						catsVisit.categories[go][subcategory].notation= false
						// console.log('pre dispatch aff neg')
						dispatch(writeCategories(catsVisit.categories))
						// console.log('post dispatch aff neg')
					}
					// neg[go].val && aff[go].val {/*nunca podrían darse */} 
			// 	};
			// }
		// };
	},[cgyes, cgno]);

	let sav=undefined, edt=undefined
	if(saved[go] && saved[go].val) sav= saved[go].val;
	if(editt[go] && editt[go].val) edt= editt[go].val;

	useEffect(()=>{
		
		console.log(saved[go], editt[go])

		if(saved[go] && saved[go].val){ // si sav es true
			catsVisit.categories[go][subcategory].saved= true
			// console.log('pre dispatch')
			// dispatch(writeCategories(catsVisit.categories))
			// setSend({...send, [go]: { val: true, category, subcategory }})
			dispatch(writeCategories(catsVisit.categories))
			dispatch(postNotation({
				Note: notation.notation,
				Observations: notation.observations,
				catName: category,
				subName: subcategory,
				saved: notation.saved,
				visitId: catsVisit.id,
			}));
		}

		else if(editt[go] && editt[go].val){ // si edt es true 
			catsVisit.categories[go][subcategory].saved= false
			// console.log('pre dispatch')
			// dispatch(writeCategories(catsVisit.categories))
			// setSend({...send, [go]: { val: true, category, subcategory }})
			dispatch(writeCategories(catsVisit.categories))
			dispatch(postNotation({ // SI está escuchando a Redux debería andar
				Note: notation.notation,
				Observations: notation.observations,
				catName: category,
				subName: subcategory,
				saved: notation.saved,
				visitId: catsVisit.id,
			}));
		}

	}, [sav, edt]);


	function yes(){
		if(admin.id || saved[go] && saved[go].val) return
		// Local:
		if (aff[go] && aff[go]['val'] ) {
			setAff({...aff, [go]: {val: false, category, subcategory}})
			setNeg({...neg, [go]: {val: false, category, subcategory}})
		}
		else {
			setAff({...aff, [go]: {val: true, category, subcategory}})
			setNeg({...neg, [go]: {val: false, category, subcategory}})
		}
	};
	function no(){
		if(admin.id || saved[go] && saved[go].val) return
		// Local:
		if (neg[go] && neg[go]['val']) {
			setNeg({...neg, [go]: {val: false, category, subcategory}})
			setAff({...aff, [go]: {val: false, category, subcategory}})
		}
		else {
			setNeg({...neg, [go]: {val: true, category, subcategory}})
			setAff({...aff, [go]: {val: false, category, subcategory}})
		}
	};

	// function handText(e){
	// 	let val = e.target.value
	// 	setText({...text, [go]: {val, category, subcategory}})
	// 	for(let i= 0; i< catsVisits[catsVisits.length-1].categories.length; i++){
	// 		if(catsVisits[catsVisits.length-1].categories[i].name===category){
	// 			catsVisits[catsVisits.length-1].categories[i][subcategory].observations= val
	// 			dispatch(writeCategories(catsVisits[catsVisits.length-1].categories))
	// 		}
	// 	}
	// };

	function save(){
		if(saved[go] && saved[go].val) return
		// else {
			setSaved({...saved, [go]: {val: true, category, subcategory}});
			setEdit({...editt, [go]: {val: false, category, subcategory}});
		// }
	// 	for(let i= 0; i< catsVisits[catsVisits.length-1].categories.length; i++){
	// 		if(catsVisits[catsVisits.length-1].categories[i].name===category){
	// 			dispatch(postNotation({
	// 				Note: catsVisits[catsVisits.length-1].categories[i][subcategory].notation, 
	// 				Observations: catsVisits[catsVisits.length-1].categories[i][subcategory].observations, 
	// 				visitId: catsVisits[catsVisits.length-1].id, 
	// 				// catSubcatId,
	// 				catName: category, 
	// 				subName: subcategory,
	// 				saved: true,
	// 			}));
	// 		}
	// 	}
	};

	function edit(){
		if(editt[go] && editt[go].val) return
		else {
			setSaved({...saved, [go]: {val: false, category, subcategory}});
			setEdit({...editt, [go]: {val: true, category, subcategory}});
		}
	};

	// let snd = undefined
	// if(send[go] && send[go].val) snd= send[go].val

	// // useEffect(()=>{
	// // 	console.log('snd before')
	// // 	if(snd !== undefined){
	// // 		console.log('snd post if')
	// // 		for(let i= 0; i< catsVisit.categories.length; i++){
	// // 			if(catsVisit.categories[i].name===category){
	// // 				dispatch(postNotation({
	// // 					Note: catsVisit.categories[i][subcategory].notation, 
	// // 					Observations: catsVisit.categories[i][subcategory].observations, 
	// // 					visitId: catsVisit.id, 
	// // 					// catSubcatId,
	// // 					catName: category, 
	// // 					subName: subcategory,
	// // 					saved: catsVisit.categories[i][subcategory].saved,
	// // 				}));
	// // 			}
	// // 		}
	// // 		setSend({...send, [go]: {val: false, category, subcategory}})
	// // 	}
	// // }, [snd]);


	// function findValue(){
	// 	if(catsVisits.length && catsVisits[catsVisits.length-1].categories.length && catsVisits[catsVisits.length-1].categories[go][subcategory].hasOwnProperty('observations')) return catsVisits[catsVisits.length-1].categories[go][subcategory].observations
	// };

	// // function appear(){
	// // 	if(catsVisit.categories.length && catsVisit.categories[go][subcategory].observations === undefined){
	// // 		document.getElementById('in').innerText= ''
	// // 	}
	// // };

	return ( <div>
		<div className="item" 
			// id={saved[go] && saved[go].val?'green':'red'}
			id={notation && notation.saved ? 'green' : 'red' }
		>
			<h6>
				Categoría: {category && category}
			</h6>
			<h6>
				Subcategoría: {subcategory && subcategory}
			</h6>
			<br></br>
			<div className="check1" 
				// id={aff[go] && aff[go]['val']? 'selected': '' /* Borde del div manejado por local */} 
				id= {notation && notation.notation === true ? 'selected': ''}
					// id={catsVisits.length && catsVisits[catsVisits.length-1].categories.length && catsVisits.length && catsVisits[catsVisits.length-1].categories[go][subcategory].notation? 'selected': ''} 
					onClick={()=>yes()}>
					Sí
					<input type='checkbox' 
						// checked={(aff[go] && aff[go]['val']) || false /*Checed by local state */} 
						checked={notation && notation.notation || false}
						// checked= {catsVisits.length && catsVisits[catsVisits.length-1].categories.length && catsVisits.length && catsVisits[catsVisits.length-1].categories[go][subcategory].notation || false /*Old checked way */}
						onChange={()=>yes()} 
						// disabled= { saved[go] && saved[go]['val']}
						disabled={admin.id || (notation && notation.saved) || false}
					/>
			</div>
			<br></br>
			<div 
					className="check2" 
					// id={neg[go] && neg[go]['val']? 'selected': '' /* Borde del div manejado por local */} 
					id={notation && notation.notation===false ? 'selected': ''}
					// id={catsVisits.length && catsVisits[catsVisits.length-1].categories.length && catsVisits.length && catsVisits[catsVisits.length-1].categories[go][subcategory].notation===false? 'selected': ''} 
					onClick={()=>no()}>
					No
					<input type='checkbox' 
						// checked={(neg[go] && neg[go]['val']) || false /*checked por local state */} 
						// checked= {catsVisits.length && catsVisits[catsVisits.length-1].categories.length && catsVisits.length && catsVisits[catsVisits.length-1].categories[go][subcategory].notation===false || false /*checked old way */}
						checked={notation && notation.notation===false || false}
						onChange={()=>no()} 
						// disabled= { saved[go] && saved[go]['val']}
						disabled={admin.id || (notation && notation.saved) || false}
					/>
			</div>
			{/* <br></br> */}
			{/* <input 
					id="in"
					className="comment" 
					onChange={(e)=> handText(e)} 
					// onClick={appear}
					disabled={ saved[go] && saved[go]['val']} 
					placeholder='Observaciones' 
					// value={text[go]?text[go]: ''} 
					// defaultValue='a'
					// defaultValue=''
					value={findValue() || ''}
			/> */}
			<br></br>

			{!admin.id && 
			<button 
				className="buttons" 
				onClick={edit} 
				// disabled={catsVisits.length && catsVisits[catsVisits.length-1].categories.length && !catsVisits.length && catsVisits[catsVisits.length-1].categories[go][subcategory].saved || false}
				//  disabled={ saved[go] && !saved[go]['val']} 
				disabled = {notation && !notation.saved || false}
				>
				Editar 
			</button>}

			{!admin.id && 
			<button 
				className="buttons" 
				onClick={save} 
				// disabled={catsVisits.length && catsVisits[catsVisits.length-1].categories.length && catsVisits.length && catsVisits[catsVisits.length-1].categories[go][subcategory].saved || false}
				//  disabled={ saved[go] && saved[go]['val']}
				disabled = {notation && notation.saved || false}
				>
				Guardar 
			</button>}

			{!admin.id && includePhoto &&
			<div> Este ítem requiere una foto 
					<button>
						Adjuntar imagen
					</button>
					<button>
						Tomar foto
					</button>
			</div>
			}
		</div>
		</div>
	)

	// return (<div></div>)
};