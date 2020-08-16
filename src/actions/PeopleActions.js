import { CLEAR_PEOPLE, GET_NUMBER_RESULTS_PEOPLE,GET_PEOPLE } from '../types';
import axios from 'axios';
import {  API_KEY_ALT, URL_SEARCH_PEOPLE, Language, URL_IMAGE,PAGE } from '../api/index';



export const PeopleActions = (people) => {
    return async ( dispatch ) => {
        try {
            const URL_PEOPLE =  `${URL_SEARCH_PEOPLE}${people}${PAGE}${API_KEY_ALT}${Language}`; 
            const response = await axios.get(URL_PEOPLE)
            dispatch(clearState())       
            
            const totalAmount = response.data.total_results;
            const perPage = response.data.total_pages;
            const resultPeople = totalAmount / perPage;

            dispatch(getResultPeople(resultPeople))   
            const peoples = (response.data.results)            
            peoples.forEach(people => {
                people.poster_src = URL_IMAGE + people.poster_path
                dispatch(listingPeople(people))
                //  console.log(people)
            })  
        } catch (error) {
            console.log(error)
        }
    }
}

const clearState = () => ({ type:CLEAR_PEOPLE })
const listingPeople = people => ({ type: GET_PEOPLE, payload: people })
const getResultPeople = people => ({ type:GET_NUMBER_RESULTS_PEOPLE, payload:people })

                 
