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
                    <h4 className="welcome"> Bienvenido a la plataforma de relevamiento de los equipos informáticos pertenecientes a la empresa. 
                    <br /> A continuación se detalla una guía abarcativa para comprender el funcionamiento del sitio y obtener una buena experiencia de uso.</h4>
                    <div className="indexguide">
                        Origen: <a href="#apartado3">Ir al apartado 3</a>

                        <h4>Índice: </h4>

                        <h4>1. Introducción.</h4>
                        <h5>1.1. Datos.</h5>
                        <h6>1.1.1. Notación.</h6>
                        <h6>1.1.2. Observación.</h6>
                        <h6>1.1.3. Imagen.</h6>
                        
                        <h4>2. Roles.</h4>
                        <h5>2.1. Usuario.</h5>
                        <h5>2.2. Administrador.</h5>

                        <h4>3. Relevamientos.</h4>
                    </div>
                </div>

                <div className="guide">
                    1. Introducción.
                        El propósito de la aplicación es servir como herramienta para recopilar la totalidad de datos de cada relevamiento realizado a nivel general de los equipos. Cada relevamiento conlleva abarcar ocho (8) categorías o sectores de la empresa. Donde cada categorías se compone de varias subcategorías o elementos a ser relevados o revisados individualmente. Cada subcategoría o elemento requiere de almacenar ciertos parámetros o datos. En el apartado 1.1. Datos. se detallan estos datos.

                    1.1. Datos. 
                        Cada elemento individual relevado se compone de: 
                    1.1.1. Notación. Una respuesta binaria de "sí" o "no".
                    1.1.2. Observación. Un espacio para escribir un comentario donde se detallen las observaciones.
                    1.1.3. Imagen. Un espacio para subir una fotografía sobre el ítem en cuestión (este parámetro no es requerido siempre).

                    2. Roles.
                        Al momento de ingresar a la plataforma se debe elegir entre uno de dos roles: usuario o administrador.
                    2.1. Usuario. Al momento de registrarse debe indicar a qué equipo pertenece: Telecomunicaciones o Microinformática. Puede efectuar y editar relevamientos: subir notaciones, observaciones e imágenes, a diferencia de un Administrador, quien no puede hacerlo. Tiene acceso solo a sus propios relevamientos que él mismo como Usuario inició. Una vez finalizado un relevamiento, solo puede visualizarlo, pero ya no puede volver a editarlo.
                    2.1. Administrador. Puede monitorear todos los relevamientos abiertos por cualquier Usuario. No puede abrir relevamientos ni editarlos, ya sea que estén abiertos o finalizados. 
                    
                    Destino: <a name="apartado3">Apartado 3</a>
                </div>
            </div>
        </div>
    )
};