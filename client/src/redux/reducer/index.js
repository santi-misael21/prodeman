import { CATS_SUBS, GET_ALL_VISITS, GET_TEAMS, GET_USER_VISITS, GET_VISIT_BYID, GET_VISIT_ID, LOGIN_ADMIN, LOGIN_USER, LOG_OUT, POST_ADMIN, POST_NOTATION, POST_TEAMS, POST_USER, SET_PAGE, STATUS_PAGES, WRITE, WRITECATS, WRITESUBS,  } from "../actions";
import { putCategories } from "./auxiliar";


const initialState= {
    categories: [], // Tabla categories
    subcategories: [], // Tabla subcategories
    teams: [], // Tabla teams
    user: {}, // Datos del usuario logeado { id | username | lastVisitId | teamId}
    admin: {}, 
    cat_sub_related: false, // En desuso (12/12/22 18:12)
    visits: [], // En desuso (12/12/22 18:12)
    visit: {
        id: undefined,
        date: undefined,
        categories: [],
        team: undefined,
        userId: undefined,
        closed: undefined,
    },
    actualPage: 0,
    statusPages: [0,0, 0,0, 0,0, 0,0], //un booleano por cada página completa o no completa (8)
    visitsList: [],
};


const rootReducer = (state= initialState, action)=>{
    switch (action.type) {
        // case GET_VISIT_BYID:
        //     return {
        //         ...state,
        //         visit: action.payload
        //     };
        case GET_VISIT_ID:
            if(typeof action.payload==='string') return {...state}
            // console.log(action.payload)
            let object = {
                    ...state.visit,
                    id: action.payload.Id,
                    date: action.payload.Opening_date,
                    team: action.payload.Team,
                    closed: action.payload.Closed,
                    userId: action.payload.userId,
                    categories: putCategories([]),
            }
            if(action.payload.hasOwnProperty('notations')){
                object = {...object, 
                    categories: putCategories(action.payload.notations) // [...allNotations]
                }
            }
            // console.log('Así queda object para la visit hábil',object)
            return{
                ...state,
                visit: {
                    ...object
                },
                visits: [ // Tuve que comentar porque visit (arriba) se rompe. En fin, cosas de Redux...
                    ...state.visits, { // No era eso -_-
                        ...object,
                    }
                ] ,
            };
        case GET_USER_VISITS:
            // console.log(action.payload)
            return {
                ...state,
                visitsList: action.payload,
            };
        case GET_ALL_VISITS:
            return {
                ...state,
                visitsList: action.payload,
            };
        case WRITE:
            // console.log('PROBLEMA DE LOS WRITE? esto modifica visit.categories -> ', action.payload)
            return {
                ...state,
                visit: {
                    ...state.visit, 
                    categories: action.payload,
                },
                
            };
        case WRITECATS:
            if(typeof action.payload === 'string') return { ...state }
            return {
                ...state,
                categories: action.payload,
            };
        case WRITESUBS:
            if(typeof action.payload === 'string') return { ...state }
            return {
                ...state,
                subcategories: action.payload,
            };
        case CATS_SUBS:
            if(typeof action.payload === 'string') return { ...state }
            return {
                ...state,
                cat_sub_related: action.payload,
            };
        case SET_PAGE:
            return {
                ...state,
                actualPage: action.payload,
            };
        case STATUS_PAGES:
            return {
                ...state,
                statusPages: action.payload,
            };
        case POST_TEAMS:
            return {
                ...state,
                teams: action.payload,
            };
        case GET_TEAMS:
            return {
                ...state,
                teams: action.payload,
            };
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload,
            };
        case POST_USER:
            // console.log(action.payload)
            return {
                ...state,
                user: action.payload,
            };
        case POST_NOTATION:
            let index
            state.visit.categories.map((c,i)=>{
                if(c.name === action.payload.names[0]){
                    index = i
                    c[action.payload.names[1]].notation = action.payload.Note
                    c[action.payload.names[1]].observations = action.payload.Observations
                }
            })
            // let visits = [{...state.visit}]
            // console.log('Así queda redux POST_NOTATION -> state: ', state)
            return {
                ...state,
                // visits,
            };
        case LOGIN_ADMIN:
            return {
                ...state,
                admin: action.payload,
            };
        case POST_ADMIN:
            return {
                ...state,
                admin: action.payload,
            };
        case LOG_OUT:
            return {
                ...state,
                user: action.payload,
                admin: action.payload
            }

        default: return state;
    };
};

export default rootReducer;