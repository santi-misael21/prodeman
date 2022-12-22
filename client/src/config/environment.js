const { REACT_APP_API_URL} = process.env

// export const API_URL = REACT_APP_API_URL === "localhost" ? `http://${REACT_APP_API_URL}:${REACT_APP_API_PORT}` : `https://${REACT_APP_API_URL}`;

export const API_URL = !REACT_APP_API_URL ? `http://localhost:3001` : `https://${REACT_APP_API_URL}`;
// export const API_URL = "https://prodeman.onrender.com";

/*REACT_APP_API_URL=localhost
REACT_APP_API_PORT=3001 */