export function Detection(catsVisit, catsRequired){ // Para saber si la visita que entra tiene alguna notation

	if(Object.keys(catsVisit).length && catsVisit.categories.length) {

		let detector = []
        let filled = undefined
		for(let i=0; i< catsVisit.categories.length; i++){
            detector[i] = {}
            // detector[i].atomic = []
			for (let prop in catsVisit.categories[i]){
				let not = catsVisit.categories[i][prop].notation
				let obs = catsVisit.categories[i][prop].observations
				if( not !== undefined|| obs !==undefined) {
                    // detector[i].categ = catsVisit.categories[i].name;
                    detector[i] = {...catsVisit.categories[i]};
                    // detector[i].atomic.push({
                    //     atomic: catsVisit.categories[i][prop],
                    //     sub: prop,   
                    // })  
                    filled = true               
				}
			}
		}
		if(filled) {
            for(let i=0; i<catsRequired.length; i++){
                for(let e=0; e<detector.length; e++){
                    if(catsRequired[i].name === detector[e].name){
                        catsRequired[i]= detector[e]
                    }
                }
            }
			console.log('catsVisit desde adentro: ', catsVisit, 'detector: ', detector, 'catsRequired: ', catsRequired)
            return catsRequired
		}
        return undefined
	}
    return false

};

export function DefinePages (catsVisit, binaries) {
    /* Qué entra -> un array de ocho binarios ? -> [0,0, 0,0, 0,0, 0,0] -> mejor aún, el mismo estado de Redux que los contiene

    cómo lo hace -> algo así como mapeando el array que se manda a <Item/> 
    cuál es el array? gran cuestión
    habrá que recibirlo por props

    qué debe sacar -> una array con ocho binarios, cada uno representa una página, completa o no -> [0,0, 0,0, 0,0, 0,0]
     */
    // console.log(catsVisit.categories)
    let bins = []
    for(let i=0; i< catsVisit.categories.length; i++){
        bins[i] = 1
        for (let prop in catsVisit.categories[i]){
            let g = catsVisit.categories[i][prop]
            if(g.saved !== true && typeof g !== 'string'){
                // console.log(catsVisit.categories[i][prop], 'i: ', i)
                bins[i] = 0
            }
        }
    }
    return bins

}