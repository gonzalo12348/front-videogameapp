// import dotenv from 'dotenv'
// dotenv.config();
// // import REACT_APP_API from process.env
// const {
//     REACT_APP_API
//   } = process.env;

// export const BASE_URL = process.env.REACT_APP_API || 'http://localhost:3001';
export const BASE_URL = 'https://back-end-videogameapp.herokuapp.com'
export const GET_15GAMES_URL = BASE_URL + '/videogames';
export const GET_GAMES_FOUNDED_URL = GET_15GAMES_URL+ '?name=';
export const GET_GAME_DETAILS_URL = BASE_URL + '/videogame/'
export const POST_GAME_URL = GET_GAME_DETAILS_URL;
export const GET_GENRES_URL = BASE_URL + '/genres'
export const GET_GAMES_CREATED_URL = BASE_URL + '/gamesCreated'
export const POST_GAMES_NEXT_URL = GET_15GAMES_URL;