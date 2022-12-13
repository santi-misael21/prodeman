import axios from 'axios'; 

export const GET_LAST_VISIT = "GET_LAST_VISIT";
export const GET_VISIT_ID = "GET_VISIT_ID";
export const GET_VISIT_BYID= "GET_VISIT_BYID";
export const GET_USER_VISITS = "GET_ALL_VISITS";
export const GET_ALL_VISITS = "GET_ALL_VISITS";
export const WRITE = "WRITE";
export const WRITECATS = "WRITECATS";
export const WRITESUBS = "WRITESUBS";
export const CATS_SUBS = "CATS_SUBS";
export const SET_PAGE = "SET_PAGE";
export const STATUS_PAGES = "STATUS_PAGES";
export const POST_TEAMS = "POST_TEAMS";
export const GET_TEAMS = "GET_TEAMS";
export const LOGIN_USER = "LOGIN_USER";
export const POST_USER = "POST_USER";
export const LOGIN_ADMIN = "LOGIN_ADMIN";
export const POST_ADMIN = "LOGIN_ADMIN";
export const GET_USERS = "GET_USERS";
export const POST_NOTATION = "POST_NOTATION";

// export const getLastVisit = () => { // Te devuelve el objeto de la última visita en la base de datos
//     return async function (dispatch) { // Dada la creación de perfiles, no tendrá sentido esta ruta
//         axios.get(`http://localhost:3001/visit/last`) 
//         .then(r=> dispatch({
//             type: GET_VISIT_ID,
//             payload: r.data,
//         })).catch(e=> console.log(e))
//     }
// };

export const getVisitID = (body) => { // Mandas la creación de la visita y te devuelve la visita creada + id
    return async function (dispatch){
        // console.log(body)
        axios.post("http://localhost:3001/visit/visitid", body
        ).then(r=> dispatch({
            type: GET_VISIT_ID, 
            payload: r.data,
        })).catch(e=>console.log(e))
    } 
};

export const getVisitByID = (id) => {
    return async function (dispatch) {
        axios.get(`http://localhost:3001/visit?id=${id}`)
        .then(r=>dispatch({
            type: GET_VISIT_ID,
            payload: r.data,
        }))
    }
}

export const getVisitsByuserId = (userId) => {
    return async function (dispatch){
        axios.get(`http://localhost:3001/visit/all?userId=${userId}`)
        .then(r=>dispatch({
            type: GET_USER_VISITS,
            payload: r.data,
        })).catch(e=> console.log(e))
    }
};

export const getAllVisits = () => {
    return async function (dispatch){
        axios.get(`http://localhost:3001/visit/all`)
        .then(r=>dispatch({
            type: GET_ALL_VISITS,
            payload: r.data,
        })).catch(e=> console.log(e))
    }
};

export const writeCategories = (array) => {
    return {
        type: WRITE,
        payload: array,
    }
};

export const writeCats = (names) => {
    return async function (dispatch) {
        // console.log("array of action writeCatsAndSubcats", names)
        axios.post(`http://localhost:3001/categories/define`, {
            names
        }).then(r=> dispatch({
            type: WRITECATS,
            payload: r.data,
        })).catch(e=>console.log(e))
    }
};
export const writeSubs = (names) => {
    return async function (dispatch) {
        // console.log("array of action writeCatsAndSubcats", names)
        axios.post(`http://localhost:3001/subcategories/define`, {
            names
        }).then(r=> dispatch({
            type: WRITESUBS,
            payload: r.data,
        })).catch(e=>console.log(e))
    }
};

export const cats_subs = (objectsInArray) => {
    return async function (dispatch) {
        axios.post(`http://localhost:3001/catsubcats/define`,{
            objectsInArray
        }).then(r=> dispatch({
            type: CATS_SUBS,
            payload: r.data,
        })).catch(e=> console.log(e))
    }
}

export const setPage = (n) => {
    return {
        type: SET_PAGE,
        payload: n
    }
};

export const statusPages = (a) => {
    return {
        type: STATUS_PAGES,
        payload: a
    }
};

export const getTeams = () => {
    return async function (dispatch) {
        axios.get(`http://localhost:3001/teams/all`)
        .then(r=> dispatch({
            type: GET_TEAMS,
            payload: r.data,
        })).catch(e => console.log(e))
    }
};

export const postTeams = (teamname) => { // []
    return async function (dispatch) {
        axios.post(`http://localhost:3001/teams/define`, {
            teamname 
        }).then(r=> dispatch({
            type: POST_TEAMS,
            payload: r.data,
        })).catch(e=> console.log(e))
    }
};

export const getUsers = () => {
    return async function (dispatch) {
        axios.post(`http://localhost:3001/users/all`)
        .then(r=>dispatch({
            type: GET_USERS,
            payload: r.data,
        })).catch(e=>console.log(e))
    }
};

export const loginUser = (body) => { // { username | password } 
    return async function (dispatch) {
        axios.post(`http://localhost:3001/users/login`, {
            ...body
        }).then(r=> dispatch({
            type: LOGIN_USER,
            payload: r.data,
        })).catch(e=> console.log(e))
    }
};

export const postUser = (user) => { // user = {teamname, username, password,}
    return async function (dispatch) {
        // console.log(user)
        axios.post(`http://localhost:3001/users/create`, {
            ...user
        }).then(r=>dispatch({
            type: POST_USER,
            payload: r.data,
        })).catch(e=>console.log(e))
    }
};

export const loginAdmin = (body) => { // { username | password } 
    return async function (dispatch) {
        axios.post(`http://localhost:3001/admins/login`, {
            ...body
        }).then(r=> dispatch({
            type: LOGIN_ADMIN,
            payload: r.data,
        })).catch(e=> console.log(e))
    }
};

export const postAdmin = (admin) => { // user = {teamname, username, password,}
    return async function (dispatch) {
        // console.log(user)
        axios.post(`http://localhost:3001/admins/define`, {
            ...admin
        }).then(r=>dispatch({
            type: POST_ADMIN,
            payload: r.data,
        })).catch(e=>console.log(e))
    }
};

export const postNotation = (notation) => {
    return async function (dispatch) {
        axios.post(`http://localhost:3001/notations/define`,{
            ...notation
        }).then(r=> dispatch({
            type: POST_NOTATION,
            payload: r.data,
        })).catch(e=> console.log(e))
    }
};