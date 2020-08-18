import { CLEAR_SERIE, GET_NUMBER_RESULTS_SERIE, GET_SERIE } from '../types';
import axios from 'axios';
import {  API_KEY_ALT, URL_SEARCH_SERIE, Language, URL_IMAGE,PAGE } from '../api/index';



export const SeriesActions = (serie) => {
    return async ( dispatch ) => {
        try {
            const URL_SERIE = `${URL_SEARCH_SERIE}${serie}${PAGE}${API_KEY_ALT}${Language}`; 
            const response = await axios.get(URL_SERIE)
            dispatch(clearState())    
            
            const totalAmount = response.data.total_results;
            const perPage = response.data.total_pages;
            const resultPeople = totalAmount / perPage;

            // console.log(resultPeople);

            dispatch(getResultSerie(resultPeople))             
            const series = (response.data.results)            
            series.forEach(serie => {
                serie.poster_src = URL_IMAGE + serie.poster_path;
                serie.title  = serie.original_name;
                dispatch(listingSerie(serie))

            })  
        } catch (error) {
            console.log(error)
        }
    }
}

const clearState = () => ({ type:CLEAR_SERIE })
const listingSerie = serie => ({ type: GET_SERIE, payload: serie })
const getResultSerie = serie => ({ type:GET_NUMBER_RESULTS_SERIE, payload:serie })

                 
