import React,{ useState } from 'react';
import {  Search, SearchIcon, SearchInput,SearchIconClear } from './SearchBarStyles';
import axios from 'axios';
import {  API_KEY_ALT, URL_SEARCH_MOVIE, Language, URL_IMAGE,PAGE } from '../../api';
import { useDispatch } from 'react-redux';

//Actions
import {listingMovie, clearState, getResultMovie} from '../../actions/index';
import {seriesActions}  from '../../actions/SeriesActions';



export default function SearchBar(){
    const  dispatch = useDispatch()
    const [ searchMovie, setSearchMovie ] = useState('');

    function handleChange(e){
         setSearchMovie(e.target.value)
         
    }

 async function handleSubmit(e){
        e.preventDefault();  
        dispatch(seriesActions(searchMovie))      
        try {
            const URL_MOVIE = `${URL_SEARCH_MOVIE}${searchMovie}${PAGE}${API_KEY_ALT}${Language}`; 
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