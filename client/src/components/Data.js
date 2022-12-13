export const CATEGORIES = ["Casa Principal", "ExAgroinsumos", "Taller", "Hangar", "Hangar Oficina", "Balanza", "Agroinsumos", "Cámaras"];
export const SUBCATEGORIES = ['Rack Principal Orden', 'Rack Principal Limpieza', 'Funcionamiento AP', 'Funcionamiento teléfono', 'UPS', 'Limpiar PC', 'Acomodar cables', 'Chequear visualización'];
export const TEAMS = ["Microinformática", "Telecomunicaciones"];

export function CreateCatsRequired(categories){
    let cats = []
    cats.push(createCategory(categories[0],1,1,1,1,1,0,0,0))
    cats.push(createCategory(categories[1],1,1,1,0,0,0,0,0))
    cats.push(createCategory(categories[2],1,1,1,1,0,0,0,0))
    cats.push(createCategory(categories[3],1,1,1,1,0,0,0,0))
    cats.push(createCategory(categories[4],0,0,0,1,0,1,1,0))
    cats.push(createCategory(categories[5],1,1,1,0,1,1,0,0))
    cats.push(createCategory(categories[6],0,0,1))
    cats.push(createCategory(categories[7],0,0,0,0,0,0,0,1))

    return cats
};
//Función creadora de categorías: uno inserta el nombre de la categoría y los controles que se deberán realizar para la misma. Estos últimos con parámetros booleanos. Parámetros = {Cantidad: 9, 1: String, 2~9: Booleanos, forward: Strings in Array }

export function createCategory(name, orden, limpieza, AP, telefono, ups, pc, cables, visualizacion, array) {

    if(!name || typeof name!== 'string') return new Error("Must have a name")
    if(array && !Array.isArray(array)) return new Error("Last parameter must be an Array or it must not exist")

    //Traer de Redux el estado que guarda las categorías existentes
    //Hacer algo así como

    // let catRedux //= Buscamos el objeto de categs
    let basicObject= { notation: undefined, observations: '', saved: undefined } //Agrego saved
    let fotoObject= {photo: undefined}

    let newCat= {
        name, 
        'Rack Principal Orden': [{ ...basicObject, ...fotoObject }, orden],
        'Rack Principal Limpieza': [{ ...basicObject, ...fotoObject }, limpieza],
        'Funcionamiento AP': [{ ...basicObject,  }, AP],
        'Funcionamiento teléfono': [{ ...basicObject, }, telefono],
        UPS: [{ ...basicObject,  }, ups],
        'Limpiar PC': [{ ...basicObject, ...fotoObject }, pc],
        'Acomodar cables': [{ ...basicObject, ...fotoObject }, cables],
        'Chequear visualización': [{ ...basicObject,}, visualizacion],
    }

    let catClean={}

    for(let bucle in newCat){
        if(newCat[bucle][1]) catClean[bucle]= newCat[bucle][0]
        catClean.name= name
    }

    if(!array) array= []
    if(array && array.length) {
        array.map((a,i)=> catClean[a]= { ...basicObject, } )
    }

    return catClean

};


export const EVALUATION = [
    {
      "name": "Casa Principal",
      "Rack Principal Orden": { "notation": "undefined", "observations": "undefined", "photo": "undefined" },
      "Rack Principal Limpieza": { "notation": "undefined", "observations": "undefined", "photo": "undefined" },
      "Funcionamiento AP": { "notation": "undefined", "observations": "undefined" },
      "Funcionamiento teléfono": { "notation": "undefined", "observations": "undefined" },
      "UPS": { "notation": "undefined", "observations": "undefined" }
    },
    {
      "name": "ExAgroinsumos",
      "Rack Principal Orden": { "notation": "undefined", "observations": "undefined", "photo": "undefined" },
      "Rack Principal Limpieza": { "notation": "undefined", "observations": "undefined", "photo": "undefined" },
      "Funcionamiento AP": { "notation": "undefined", "observations": "undefined" }
    },
    {
      "name": "Taller",
      "Rack Principal Orden": { "notation": "undefined", "observations": "undefined", "photo": "undefined" },
      "Rack Principal Limpieza": { "notation": "undefined", "observations": "undefined", "photo": "undefined" },
      "Funcionamiento AP": { "notation": "undefined", "observations": "undefined" },
      "Funcionamiento teléfono": { "notation": "undefined", "observations": "undefined" }
    },
    {
      "name": "Hangar",
      "Rack Principal Orden": { "notation": "undefined", "observations": "undefined", "photo": "undefined" },
      "Rack Principal Limpieza": { "notation": "undefined", "observations": "undefined", "photo": "undefined" },
      "Funcionamiento AP": { "notation": "undefined", "observations": "undefined" },
      "Funcionamiento teléfono": { "notation": "undefined", "observations": "undefined" }
    },
    {
      "name": "Hangar Oficina",
      "Funcionamiento teléfono": { "notation": "undefined", "observations": "undefined" },
      "Limpiar PC": { "notation": "undefined", "observations": "undefined", "photo": "undefined" },
      "Acomodar cables": { "notation": "undefined", "observations": "undefined", "photo": "undefined" }
    },
    {
      "name": "Balanza",
      "Rack Principal Orden": { "notation": "undefined", "observations": "undefined", "photo": "undefined" },
      "Rack Principal Limpieza": { "notation": "undefined", "observations": "undefined", "photo": "undefined" },
      "Funcionamiento AP": { "notation": "undefined", "observations": "undefined" },
      "UPS": { "notation": "undefined", "observations": "undefined" },
      "Limpiar PC": { "notation": "undefined", "observations": "undefined", "photo": "undefined" }
    },
    {
      "name": "Agroinsumos",
      "Funcionamiento AP": { "notation": "undefined", "observations": "undefined" }
    },
    {
      "name": "Cámaras",
      "Chequear visualización": { "notation": "undefined", "observations": "undefined" }
    }
  ]
