import { CLEAR_SERIE, GET_NUMBER_RESULTS_SERIE, GET_SERIE } from '../types';
import axios from 'axios';
import {  URL_IMAGE } from '../api';


export const seriesActions = (serie) => {
    return async ( dispatch ) => {
        try {
            const URL_SERIE = `https://api.themoviedb.org/3/search/tv?query=${serie}&page=1&api_key=e2e6c0526e3737f2381684d2fd63d354`; 
            const response = await axios.get(URL_SERIE)
            dispatch(clearState())        
            dispatch(getResultSerie(response.data.total_results))             
            const series = (response.data.results)            
            series.forEach(serie => {
                serie.poster_src = URL_IMAGE + serie.poster_path
                dispatch(listingSerie(serie))

            })  
        } catch (error) {
            console.log(error)
        }
    }
}

const clearState = () => ({ type:CLEAR_SERIE })
const listingSerie = (serie) => ({ type: GET_SERIE, payload: serie })
const getResultSerie = serie => ({ type:GET_NUMBER_RESULTS_SERIE, payload:serie })

                 
