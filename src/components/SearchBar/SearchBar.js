import React,{ useState } from 'react';
import {  Search, SearchIcon, SearchInput,SearchIconClear } from './SearchBarStyles';
import axios from 'axios';
import {  API_KEY_ALT, URL_SEARCH, Language, URL_IMAGE,PAGE } from '../../api';
import { useDispatch } from 'react-redux';

//Actions
import {listingMovie, clearState, getResultMovie} from '../../actions/index';


export default function SearchBar(){
    const  dispatch = useDispatch()
    const [ searchMovie, setSearchMovie ] = useState('');

    function handleChange(e){
         setSearchMovie(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();

        const url = `${URL_SEARCH}${searchMovie}${PAGE}${API_KEY_ALT}${Language}`; 

        axios.get(url)
            .then((response) => {      
            dispatch(clearState())        
            dispatch(getResultMovie(response.data.total_results))            
            const movies = (response.data.results)            
            movies.map(movie => {
                movie.poster_src = URL_IMAGE + movie.poster_path
                dispatch(listingMovie(movie))
            })             
            }).catch(error =>{
                console.log(error)
            }) 

    }

    return(
        <form onSubmit={handleSubmit}>
            <Search>
            <SearchIcon/>
                <SearchInput placeholder="Buscar por filme, série ou pessoa" onChange={handleChange} />
            <SearchIconClear />           
        </Search>
        </form>

    )
}