const { REACT_APP_API_PORT, REACT_APP_API_URL} = process.env

export const API_URL = REACT_APP_API_URL === "localhost" ? `http://${REACT_APP_API_URL}:${REACT_APP_API_PORT}` : `https://${REACT_APP_API_URL}`;