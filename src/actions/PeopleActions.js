import { CLEAR_PEOPLE, GET_NUMBER_RESULTS_PEOPLE,GET_PEOPLE } from '../types';
import axios from 'axios';
import {  URL_IMAGE } from '../api';


export const PeopleActions = (people) => {
    return async ( dispatch ) => {
        try {
            const URL_PEOPLE = `https://api.themoviedb.org/3/search/person?query=${people}&page=1&api_key=e2e6c0526e3737f2381684d2fd63d354`; 
            const response = await axios.get(URL_PEOPLE)
            dispatch(clearState())        
            dispatch(getResultPeople(response.data.total_results))             
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

                 
