import React,{ useState } from 'react';
import {  Search, SearchIcon, SearchInput,SearchIconClear } from './SearchBarStyles';
import axios from 'axios';

import {  API_KEY_ALT, URL_SEARCH, Language, URL_IMAGE } from '../../api';

export default function SearchBar({setResult}){

    const [ searchMovie, setSearchMovie ] = useState('');

    function handleChange(e){
         setSearchMovie(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();

        const url = `${URL_SEARCH}${searchMovie}${API_KEY_ALT}${Language}`
        
        axios.get(url)
            .then((response) => {
            const movies = (response.data.results)

            movies.map(movie => {
                movie.poster_src = URL_IMAGE + movie.poster_path
                setResult(movie);
            })        

           
               
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