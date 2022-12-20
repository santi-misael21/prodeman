import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Nav2 from "../Nav/Nav2";

export default function Help(){

    let user= useSelector(state => state.user);
    let admin = useSelector(state=> state.admin); 
    
    let hist = useHistory()

    if((user && !user.id) && (admin && !admin.id)){
        hist.push('/begin')
    }
    return (
        <div>
            <Nav2 helpDis initDis/>
            <div className="help" >

                
                <div >
                    <p className="welcome"> Bienvenido a la plataforma de relevamiento de los equipos informáticos pertenecientes a la empresa. 
                    <br /> A continuación se detalla una guía abarcativa para comprender el funcionamiento del sitio y obtener una buena experiencia de uso.</p>
                    <div className="indexguide">
                        {/* Índice: */}

                        <a href="#intro" className="index localvinc">1. Introducción.</a>
                            <a href="#datos" className="index localvinc first">1.1. Datos.</a>
                                <a href="#notat" className="index localvinc second">1.1.1. Notación.</a>
                                <a href="#obser" className="index localvinc second">1.1.2. Observación.</a>
                                <a href="#image" className="index localvinc second">1.1.3. Imagen.</a>
                        
                        
                        <a href="#roles" className="index localvinc">2. Roles.</a>
                            <a href="#users" className="index localvinc first">2.1. Usuario.</a>
                                <a href="#facul" className="index localvinc second">2.1.1. Facultad.</a>
                                <a href="#acces" className="index localvinc second">2.1.2. Acceso.</a>
                                <a href="#teams" className="index localvinc second">2.1.3. Equipos.</a>
                            <a href="#admin" className="index localvinc first">2.2. Administrador.</a>
                                <a href="#facul2" className="index localvinc second">2.2.1. Facultad.</a>
                                <a href="#acces2" className="index localvinc second">2.2.2. Acceso.</a>

                        <a href="#relev" className="index localvinc">3. Relevamientos.</a>
                    </div>
                </div>

                <div className="guide">
                    <a name="intro" className="localvinc"><b>1. Introducción.</b></a>
                    <p className="localvinc">Esta aplicación sirve como herramienta para recopilar la totalidad de datos de cada relevamiento de los equipos informáticos de la empresa. </p>
                    <p className="localvinc">
                    Realizar un relevamiento conlleva abarcar ocho categorías o sectores de la empresa. Donde cada categoría se compone de varias subcategorías o elementos a ser relevados o revisados individualmente. </p>
                    
                    <a name="datos" className="localvinc first"><b>1.1. Datos. </b></a>
                    <p className="localvinc first">Cada subcategoría a relevar requiere ser completada con los siguientes datos: </p>

                    <a name="notat" className="localvinc second"><b>1.1.1. Notación. </b></a>
                    <p className="localvinc second">Una respuesta binaria de <i>Sí</i> o <i>No</i>.</p>

                    <a name="obser" className="localvinc second"><b>1.1.2. Observación. </b></a>
                    <p className="localvinc second">Un espacio para escribir un comentario donde se detallen las observaciones.</p>

                    <a name="image" className="localvinc second"><b>1.1.3. Imagen. </b></a>
                    <p className="localvinc second">Un espacio para subir una fotografía sobre el ítem en cuestión (este parámetro no siempre es requerido).</p>
                    
                    <br /> <br />

                    <a name="roles" className="localvinc"><b>2. Roles.</b></a>
                    <p className="localvinc ">
                        Al momento de ingresar a la plataforma, ya sea para ingresar o registrarse, se debe elegir entre uno de dos roles: <i><b>Usuario</b></i> o <i><b>Administrador.</b></i>
                    </p>

                    <a name="users" className="localvinc first">
                        <b>2.1. Usuario. </b>
                    </a>
                    <a name="facul" className="localvinc second">
                        <b>2.1.1. Facultad. </b>
                    </a>
                    <p className="localvinc second"> 
                        Puede iniciar, editar y finalizar relevamientos: subir notaciones, observaciones e imágenes, a diferencia de un <i>Administrador</i>, quien no puede hacerlo. 
                    </p>
                    <a name="acces" className="localvinc second">
                        <b>2.1.2. Acceso. </b>
                    </a>
                    <p className="localvinc second"> 
                        Solo tiene acceso a los relevamientos que él mismo como <i>Usuario</i> inició. Una vez finalizado un relevamiento, solo puede visualizarlo, pero ya no puede volver a editarlo.
                    </p>
                    <a name="teams" className="localvinc second">
                        <b>2.1.3. Equipos. </b>
                    </a>
                    <p className="localvinc second">
                        Al momento de registrarse debe indicar indispensablemente y por única vez a qué equipo pertenece: Microinformática o Telecomunicaciones. 
                    </p>
                    <a name="admin" className="localvinc first">
                        <b>2.1. Administrador. </b>
                    </a>
                    <a name="facul2" className="localvinc second">
                        <b>2.1.1. Facultad. </b>
                    </a>
                    <p className="localvinc second">
                        No puede iniciar o editar relevamientos. 
                    </p>
                    <a name="acces2" className="localvinc second">
                        <b>2.1.2. Acceso. </b>
                    </a>
                    <p className="localvinc second">
                        Puede monitorear todos los relevamientos abiertos por cualquier <i>Usuario</i> (en progreso y finalizados). No puede editar los mismos.
                    </p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    
                </div>
            </div>
        </div>
    )
};