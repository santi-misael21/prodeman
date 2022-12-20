import { CATEGORIES, CreateCatsRequired } from "../../components/Data";

export function putCategories(notations){ // [...allNotations]

    let existents= CATEGORIES;
    let catsRequired= CreateCatsRequired(existents); // [{},{}]

    if(!notations.length) return catsRequired;

    for(let a=0; a< catsRequired.length; a++){
        for(let e=0; e< notations.length; e++){
            if(catsRequired[a].name === notations[e].catName) {
                for (let prop in catsRequired[a]) {
                    // console.log('prop and typeof:', prop, typeof prop, prop === notations[e].subName )
                    if(prop === notations[e].subName){
                        catsRequired[a][prop].notation = notations[e].Note;
                        catsRequired[a][prop].observations = notations[e].Observations;
                        catsRequired[a][prop].saved = notations[e].saved;
                        if(notations[e].hasOwnProperty("Image") && notations[e].Image !== null){
                            catsRequired[a][prop].photo = notations[e].Image
                        }
                        // catsRequired[a][prop].images = undefined;

                        // console.log(`catsRequired[${a}]: `,catsRequired[a], `notations[${e}]:`, notations[e])
                    }
                }
                // let subcat = notations[e].subName
                // catsRequired[a][subcat].notation = notations[e].Note;
                // catsRequired[a][subcat].observations = notations[e].Observations;
                // catsRequired[a][subcat].saved = notations[e].saved;
            }
        }
    }

    // console.log('catsRequired', catsRequired);

    return catsRequired;

};

// function putImages () { // la imagen devuelve su: id, url, notationId,
//                         // tenés que instertar esa url en visit.categories[i][sub].
//                         //

// }

/* PARAMETER
    "notations": [
        {
            "Id": 1,
            "Note": true,
            "Observations": "1.1.1",
            "Image": null,
            "createdAt": "2022-12-11T06:25:49.991Z",
            "updatedAt": "2022-12-11T06:25:49.991Z",
            "visitId": 1,
            "catSubcatId": 1,
            // NECESITO
            "catName": "",
            "subName": "",
        }
    ] 
*/

/* RESPONSE
{
    "Id": 1,
    "Opening_date": "2022-12-11T06:25:35.534Z",
    "Closing_date": null,
    "Team": "Microinformática",
    "Closed": false,
    "createdAt": "2022-12-11T06:25:35.826Z",
    "updatedAt": "2022-12-11T06:25:35.826Z",
    "userId": 1,
    "notations": [
        {
            "Id": 1,
            "Note": true,
            "Observations": "1.1.1",
            "Image": null,
            "createdAt": "2022-12-11T06:25:49.991Z",
            "updatedAt": "2022-12-11T06:25:49.991Z",
            "visitId": 1,
            "catSubcatId": 1
        }
    ]
} */