import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Container } from "reactstrap";
import axios from "axios";
// import newtab from './open-in-a-new-tab-icon-perfect-for-web-design-or-user-interface-applications-sign-and-symbol-vector.webp';
// import newtab2 from './227-2276359_open-in-new-window-comments-open-new-window-icon.png';
import newtab3 from './27-276982_open-new-tab-arrow-window-comments-open-in.png';
// import './camera.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotation, writeCategories } from "../../redux/actions";

function Camera ({saved, go, catName, subcategory}) { // saved = 'boolean' // go = 'number' // subcategory = [prop]

    // let [image, setImage] = useState({array: []})
    let [loading, setLoading] = useState('')
    let [notationId, setNotationId] = useState(undefined)
    let [error, setError] = useState()

    let admin = useSelector(state=> state.admin)
    let visit = useSelector(state=> state.visit)
    // console.log('visit linea 19 Camera.jsx', visit, go, subcategory, visit.categories[go][subcategory].saved)
    // if(Object.keys(visit).length) console.log(visit.categories[go][subcategory].saved)
    let currentNotation = useSelector(state=> state.notation)
    if(currentNotation && Object.keys(currentNotation).length) {
        if(notationId && notationId.Id && notationId.Id !== currentNotation.Id){
            setNotationId(currentNotation)
        }
    }
    // if(Object.keys(currentNotation).length) 
    // console.log(currentNotation)
    if(notationId) console.log(notationId)
    // image.array.map((p,i)=>{
    //     visit.categories[go][subcategory].photos.push(p)
    // })
    // if(visit.categories[go][subcategory].photos.length===image.array.length){
    //     dispatch(writeCategories(visit.categories))
    // }

    const dispatch = useDispatch()

    useEffect(()=>{
        if(!notationId || notationId.Id !== currentNotation.Id){
            let subName= subcategory
            dispatch(getNotation({catName, subName}))
        }
    },[])

    // useEffect(()=>{
    //     if(saved){
    //         console.log('saved', saved)
    //     }
    // }, [saved]);

    function handleDrop(files){
        const uploaders = files.map((file,i)=>{
            const formData = new FormData();
            formData.append('file',file);
            formData.append('tags',`codeinfuse, medium, gist`);
            formData.append('upload_preset','ml_default');
            formData.append('api_key','728342892444894');
            formData.append('timestamps',(Date.now() / 1000 | 0));
            setLoading('true')
            setError(undefined)
            return axios.post(
                `https://api.cloudinary.com/v1_1/daplsqpkv/image/upload`, 
                formData, { 
                    headers : {
                        "X-Requested-With": "XMLHttpRequest"
                    },
                }
            ).then(response => {
                const data = response.data
                // console.log('data', data)
                const url = data.secure_url;
                // console.log('fileURL', url)
                // let specificArray = image.array //default 
                // let reduxLocalNotDatabasePhotosArray = visit.categories[go][subcategory].photos //mio
                // specificArray.push(fileURL) //default 
                // reduxLocalNotDatabasePhotosArray.push(fileURL) //mio
                visit.categories[go][subcategory].photo=(url) //mio final
                // const newobj = {...image, specificArray} //default 
                // setImage(newobj)  //default 
                // console.log('redux lectura inmediata ¿actz?', visit.categories[go][subcategory].photo)
                // let Image = url
                // dispatch(postImage({url , notationId}))
                dispatch(writeCategories(visit.categories)) //mio final
                // dispatch(postNotation({
                //     Note: notation.notation,
                //     Observations: notation.observations,
                //     catName,
                //     subName: subcategory,
                //     saved: visit.categories[go][subcategory].saved,
                //     visitId: visit.id,
                //     Image,
                // }));
            }).catch(e=>{
                // console.log(e, e.message)
                setError(e.message)
            })
        })
        axios.all(uploaders).then(()=> {
            setLoading('false')
        }).catch(e=> console.log(e))
    }

    // function imagePreview(){
    //     if(loading==='true'){
    //         return <i><h5>Cargando imágenes...</h5></i>
    //     }
    //     if(loading==='false'){
    //         // let len = image.array.length
    //         let len = visit.categories[go][subcategory].photo? 1:0
    //         let plu = len === 1 ? ' imagen subida' : ' imágenes subidas'
    //         return (
    //             <div>
    //                 {!len? "Aguardá un momento": <div><i><h6>{len+plu}</h6></i> {visit.categories[go][subcategory].photo.map((item,i)=> 
    //                     <div key={i}> 
    //                         {/* <img alt='Imagen' style={{width: '125px', height:'70px', backgroundSize: 'cover', paddingRight :'15px'}} src={item} /> */}
    //                         <a href={item} target='_blank' rel="noopener noreferrer" ><i><h5>Ver imagen {i+1} en tamaño completo <img src={newtab3} width='12px' height='12px'/></h5></i></a>
    //                         {/* Llenar Redux */}

    //                     </div>
    //                 )}</div>}
    //             </div>
    //         )
    //     }
    // }

    function changeDrop(e) { 
        // setImage(e.target.value)
        console.log(e.target.value)
    }

    function del(){
        visit.categories[go][subcategory].photo= null
        dispatch(writeCategories(visit.categories)) //mio final
		// dispatch(postNotation({
		// 	Note: notation.notation,
		// 	Observations: notation.observations,
		// 	catName,
		// 	subName: subcategory,
		// 	saved: notation.saved,
		// 	visitId: visit.id,
		// 	Image: null,
		// }));
    }

    function watchError(){
        if(error){
            return (
                <div>
                    {error}
                </div>
            )
        }
    }

    let len = visit.categories[go][subcategory].photo? 1 : 0
    let plu = len === 1 ? ' imagen subida ✅' : ' imágenes subidas'
    let sav = saved? 'Guardada ✅' : 'Sin guardar ❗'

    return (
        <div className="camera">
            <Container>
            <h5 className='text-center'><b className={len? 'disabled' : 'title'}>Este ítem requiere una foto</b></h5>
                {!admin.id && !visit.categories[go][subcategory].photo && <Dropzone className= 'dropzone' 
                onDrop={handleDrop}
                onChange={(e)=>changeDrop(e)} value={visit.categories[go][subcategory].photo}>
                    {({getRootProps, getInputProps}) => (
                        <section className='section' >
                            <div {...getRootProps({className:'dropzone'})}> <input {...getInputProps()} /> <span className="icon">📷</span>
                            <h6><i className={len? 'disabled': "legend"}>Pulsá para subir o sacar una foto</i></h6>
                            </div>
                        </section>
                    )}
                </Dropzone>}
                {/* {imagePreview()} */}
                <div>
                    { loading === 'true' ? 'Subiendo imagen' : 
                !visit.categories[go][subcategory].photo ? "": <div><i className="noteofsaving"><h6>{len+plu}</h6><h6>{sav}</h6></i> 
                    {/* {visit.categories[go][subcategory].photo.map((item,i)=>  */}
                        <div className="linkimage" 
                        // key={i}
                        > 
                            {/* <img alt='Imagen' style={{width: '125px', height:'70px', backgroundSize: 'cover', paddingRight :'15px'}} src={item} /> */}
                            <a className="a"
                            // href={item} 
                            href={visit.categories[go][subcategory].photo}
                            target='_blank' 
                            rel="noopener noreferrer">
                                <i>
                                    <h5 style={{fontSize:'11.5px', }}>Ver en tamaño completo 
                                        <img src={newtab3} width='12px' height='12px' alt=''/>
                                    </h5>
                                </i>
                            </a>{ !admin.id &&
                            <i ><button onClick={del} className='deleteimage' disabled={saved}><h5 style={{fontSize:'10px', paddingBottom:'4px'}}>❌ Borrar</h5></button></i>}
                            {/* Llenar Redux */}

                        </div>
                    {/* )} */}
                    </div>}
                </div>
            </Container>
            {watchError()}
        </div>
    )
}

export default Camera;