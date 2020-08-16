import { GET_MOVIE, CLEAR, GET_NUMBER_RESULTS_MOVIE} from '../types';
import axios from 'axios';
import {  API_KEY_ALT, URL_SEARCH_MOVIE, Language, URL_IMAGE,PAGE } from '../api/index';


export const moviesActions = (movie) => {
    return async ( dispatch ) => {
        try {
            const URL_MOVIE = `${URL_SEARCH_MOVIE}${movie}${PAGE}${API_KEY_ALT}${Language}`; 
            const response = await axios.get(URL_MOVIE)
            dispatch(clearState())        
            dispatch(getResultMovie(response.data.total_results))             
            const movies = (response.data.results)            
            movies.forEach(movie => {
                movie.poster_src = URL_IMAGE + movie.poster_path
                dispatch(listingMovie(movie))
            })  
        } catch (error) {
            console.log(error)
        }
    }
}


export const listingMovie = (movies) => ({type: GET_MOVIE, payload: movies});
export const clearState = () => ({type:CLEAR});
export const getResultMovie = (number) => ({type:GET_NUMBER_RESULTS_MOVIE, payload:number});



                 
