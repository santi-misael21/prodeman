import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Container } from "reactstrap";
import axios from "axios";
// import newtab from './open-in-a-new-tab-icon-perfect-for-web-design-or-user-interface-applications-sign-and-symbol-vector.webp';
// import newtab2 from './227-2276359_open-in-new-window-comments-open-new-window-icon.png';
import newtab3 from './27-276982_open-new-tab-arrow-window-comments-open-in.png';
import './camera.css';

const Camera = (props) => {

    let [image, setImage] = useState({array: []})
    let [loading, setLoading] = useState('')

    function handleDrop(files){
        const uploaders = files.map((file,i)=>{
            const formData = new FormData();
            formData.append('file',file);
            formData.append('tags',`codeinfuse, medium, gist`);
            formData.append('upload_preset','ml_default');
            formData.append('api_key','728342892444894');
            formData.append('timestamps',(Date.now() / 1000 | 0));
            setLoading('true')
            return axios.post(
                `https://api.cloudinary.com/v1_1/daplsqpkv/image/upload`, 
                formData, { 
                    headers : {
                        "X-Requested-With": "XMLHttpRequest"
                    },
                }
            ).then(response => {
                const data = response.data
                console.log('data', data)
                const fileURL = data.secure_url;
                console.log('fileURL', fileURL)
                let specificArray = image.array
                specificArray.push(fileURL)
                const newobj = {...image, specificArray}
                setImage(newobj) 
                console.log('image', image)
            })
        })
            axios.all(uploaders).then(()=> {
                setLoading('false')
            })
    }

    function imagePreview(){
        if(loading==='true'){
            return <i><h5>Cargando imágenes...</h5></i>
        }
        if(loading==='false'){
            let len = image.array.length
            let plu = len === 1 ? ' imagen subida' : ' imágenes subidas'
            return (
                <div>
                    {!len? "Aguardá un momento": <div><i><h6>{len+plu}</h6></i> {image.array.map((item,i)=> 
                        <div key={i}> 
                            {/* <img alt='Imagen' style={{width: '125px', height:'70px', backgroundSize: 'cover', paddingRight :'15px'}} src={item} /> */}
                            <a href={item} target='_blank' rel="noopener noreferrer" ><i><h5>Ver imagen {i+1} en tamaño completo <img src={newtab3} width='12px' height='12px'/></h5></i></a>
                        </div>
                    )}</div>}
                </div>
            )
        }
    }


    return (
        <div>
            <Container>
                <i className="title"><b className='text-center'>Este ítem requiere una foto</b></i>
                <Dropzone className= 'dropzone' 
                onDrop={handleDrop}
                onChange={(e)=>setImage(e.target.value)} value={image}>
                    {({getRootProps, getInputProps}) => (
                        <section style={{border: '2px dashed gray'}}>
                            <div {...getRootProps({className:'dropzone'})}> <input {...getInputProps()} /> <span className="icon">📷</span>
                            <p className="legend">Pulsá para subir o sacar una foto</p>
                            </div>
                        </section>
                    )}
                </Dropzone>
                {imagePreview()}
            </Container>
        </div>
    )
}

export default Camera;