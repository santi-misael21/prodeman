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
                            <a href="#buttn" className="index localvinc first">3.1. Botones.</a>
                                <a href="#savng" className="index localvinc second">3.1.1. Guardar.</a>
                                    <a href="#enabl" className="index localvinc third">3.1.1. Habilitamiento.</a>
                                    <a href="#disab" className="index localvinc third">3.1.2. Deshabilitamiento.</a>
                                    <a href="#funct" className="index localvinc third">3.1.3. Función.</a>
                                <a href="#edtng" className="index localvinc second">3.1.1. Guardar.</a>
                                    <a href="#enabl2" className="index localvinc third">3.1.1. Habilitamiento.</a>
                                    <a href="#disab2" className="index localvinc third">3.1.2. Deshabilitamiento.</a>
                                    <a href="#funct2" className="index localvinc third">3.1.3. Función.</a>
                            {/* <a href="#admin" className="index localvinc first">2.2. Administrador.</a>
                                <a href="#facul2" className="index localvinc second">2.2.1. Facultad.</a>
                                <a href="#acces2" className="index localvinc second">2.2.2. Acceso.</a> */}
                    </div>
                </div>

                <div className="guide">
                    <a href="#intro" style={{color:'yellowgreen'}} name="intro" className="localvinc"><b>1. Introducción.</b></a>
                    <p className="localvinc">Esta aplicación sirve como herramienta para recopilar la totalidad de datos de cada relevamiento de los equipos informáticos de la empresa. </p>
                    <p className="localvinc">
                    Realizar un relevamiento conlleva abarcar ocho categorías o sectores de la empresa. Donde cada categoría se compone de varias subcategorías o elementos a ser relevados o revisados individualmente. </p> <br />
                    
                    <a href="#datos" style={{color:'yellowgreen'}} name="datos" className="localvinc first"><b>1.1. Datos. </b></a>
                    <p className="localvinc first">Cada subcategoría a relevar requiere ser completada con los siguientes datos: </p>

                    <a href="#notat" style={{color:'yellowgreen'}} name="notat" className="localvinc second"><b>1.1.1. Notación. </b></a>
                    <p className="localvinc second">Una respuesta binaria de <i>Sí</i> o <i>No</i>.</p>

                    <a href="#obser" style={{color:'yellowgreen'}} name="obser" className="localvinc second"><b>1.1.2. Observación. </b></a>
                    <p className="localvinc second">Un espacio para escribir un comentario donde se detallen las observaciones.</p>

                    <a href="#image" style={{color:'yellowgreen'}} name="image" className="localvinc second"><b>1.1.3. Imagen. </b></a>
                    <p className="localvinc second">Un espacio para subir una fotografía sobre el ítem en cuestión (este parámetro no siempre es requerido).</p>
                    
                    <br /> <br /> <br />

                    <a href="#roles" style={{color:'yellowgreen'}} name="roles" className="localvinc"><b>2. Roles.</b></a>
                    <p className="localvinc ">
                        Al momento de ingresar a la plataforma, ya sea para ingresar o registrarse, se debe elegir entre uno de dos roles: <i><b>Usuario</b></i> o <i><b>Administrador.</b></i>
                    </p>
                                    <br />
                    <a href="#users" style={{color:'yellowgreen'}} name="users" className="localvinc first">
                        <b>2.1. Usuario. </b>
                    </a>
                    <a href="#facul" style={{color:'yellowgreen'}} name="facul" className="localvinc second">
                        <b>2.1.1. Facultad. </b>
                    </a>
                    <p className="localvinc second"> 
                        Puede iniciar, editar y finalizar relevamientos: subir notaciones, observaciones e imágenes, a diferencia de un <i>Administrador</i>, quien no puede hacerlo. 
                    </p>
                    <a href="#acces" style={{color:'yellowgreen'}} name="acces" className="localvinc second">
                        <b>2.1.2. Acceso. </b>
                    </a>
                    <p className="localvinc second"> 
                        Solo tiene acceso a los relevamientos que él mismo como <i>Usuario</i> inició. Una vez finalizado un relevamiento, solo puede visualizarlo, pero ya no puede volver a editarlo.
                    </p>
                    <a href="#teams" style={{color:'yellowgreen'}} name="teams" className="localvinc second">
                        <b>2.1.3. Equipos. </b>
                    </a>
                    <p className="localvinc second">
                        Al momento de registrarse debe indicar indispensablemente y por única vez a qué equipo pertenece: Microinformática o Telecomunicaciones. 
                    </p> <br />
                    <a href="#admin" style={{color:'yellowgreen'}} name="admin" className="localvinc first">
                        <b>2.2. Administrador. </b>
                    </a>
                    <a href="#facul2" style={{color:'yellowgreen'}} name="facul2" className="localvinc second">
                        <b>2.2.1. Facultad. </b>
                    </a>
                    <p className="localvinc second">
                        No puede iniciar o editar relevamientos. 
                    </p>
                    <a href="#acces2" style={{color:'yellowgreen'}} name="acces2" className="localvinc second">
                        <b>2.2.2. Acceso. </b>
                    </a>
                    <p className="localvinc second">
                        Puede monitorear todos los relevamientos abiertos por cualquier <i>Usuario</i> (en progreso y finalizados). No puede editar los mismos.
                    </p>
                    <br /><br /><br />
                    <a href="#relev" style={{color:'yellowgreen'}} name="relev" className="localvinc"><b>3. Relevamientos.</b></a>
                    <p className="localvinc">                    
                    Cada relevamiento está compuesto de ocho páginas, cada una representa una categoría. 
                    Dependiendo de cada una existirán más o menos elementos o subcategorías a relevar.
                    En la zona inferior de cada tarjeta, tienen lugar dos botones: <i>Editar</i> y <i>Guardar</i>.
                    </p> <br />
                    <a href="#buttn" style={{color:'yellowgreen'}} name="buttn" className="localvinc first">
                        <b>3.1. Botones.  </b>
                    </a>
                    <a href="#savng" style={{color:'yellowgreen'}} name="savng" className="localvinc second">
                        <b>3.1.1. Guardar.  </b>
                    </a>
                    <a href="#enabl" style={{color:'yellowgreen'}} name="enabl" className="localvinc third">
                        <b>3.1.1.1. Habilitamiento. </b>
                    </a>
                    <p className="localvinc third">                    
                    El botón <i>Guardar</i> se habilita cuando la visita se encuentra abierta y: <br />
                    -se elige una respuesta entre sí o no; <br />
                    {/* -se pulsa el botón <i>Editar</i>. */}
                    </p>
                    <a href="#disab" style={{color:'yellowgreen'}} name="disab" className="localvinc third">
                        <b>3.1.1.2. Deshabilitamiento. </b>
                    </a>
                    <p className="localvinc third">    
                    El botón <i>Guardar</i> se deshabilita cuando: <br />
                    -la visita se cierra;  <br />
                    -no se define una respuesta entre sí o no; <br />
                    -es pulsado este mismo botón;
                    </p>

                    <a href="#funct" style={{color:'yellowgreen'}} name="funct" className="localvinc third">
                        <b>3.1.1.3. Función. </b>
                    </a>
                    <a href="#datab" style={{color:'yellowgreen'}} name="datab" className="localvinc fourth">
                        <b>3.1.1.3.1. Base de datos. </b>
                    </a>
                    <p className="localvinc fourth">  
                    Sube a la base de datos los datos que estén registrados en esa tarjeta.
                    </p>
                    <a href="#monit" style={{color:'yellowgreen'}} name="monit" className="localvinc fourth">
                        <b>3.1.1.3.2. Monitoreo.  </b>
                    </a>
                    <p className="localvinc fourth">    
                    Los administradores pueden ver esos datos desde su cuenta desde el instante en que el <i>usuario</i> los <i>guarda</i>.
                    </p> <br />


                    <a href="#edtng" style={{color:'yellowgreen'}} name="edtng" className="localvinc second">
                        <b>3.1.2. Editar. </b>
                    </a>
                    <a href="#enabl2" style={{color:'yellowgreen'}} name="enabl2" className="localvinc third">
                        <b>3.1.2.1. Habilitamiento. </b>
                    </a>
                    <p className="localvinc third">    
                    El botón <i>Editar</i> se habilita cuando: <br />
                    -se pulsa el botón <i>Guardar</i>;
                    </p>
                    <a href="#disab2" style={{color:'yellowgreen'}} name="disab2" className="localvinc third">
                        <b>3.1.2.2. Deshabilitamiento. </b>
                    </a>
                    <p className="localvinc third">    
                    El botón <i>Editar</i> se deshabilita cuando:  <br />
                    -es pulsado este mismo botón; <br />
                    -se concluye la visita.
                    </p>
                    <a href="#funct2" style={{color:'yellowgreen'}} name="funct2" className="localvinc third">
                        <b>3.1.2.3. Función. </b>
                    </a>
                    <p className="localvinc third">    
                    Sirve para cambiar cualquier dato que se haya guardado (respuesta binaria, observación o imagen).
                    </p>

                    
                </div>
            </div>
        </div>
    )
};