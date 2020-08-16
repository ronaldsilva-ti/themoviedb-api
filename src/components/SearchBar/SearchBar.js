import React,{ useState } from 'react';
import {  Search, SearchIcon, SearchInput,SearchIconClear } from './SearchBarStyles';
import { useDispatch } from 'react-redux';

//Actions
import { SeriesActions }  from '../../actions/SeriesActions';
import { PeopleActions } from '../../actions/PeopleActions';
import { MoviesActions } from '../../actions/MovieAction';


export default function SearchBar(){
    const  dispatch = useDispatch()
    const [ search, setSearch ] = useState('');

    function handleChange(e){
         setSearch(e.target.value)
         
    }

function handleSubmit(e){
        e.preventDefault();  
        dispatch(SeriesActions(search))  
        dispatch(PeopleActions(search))
        dispatch(MoviesActions(search))    
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