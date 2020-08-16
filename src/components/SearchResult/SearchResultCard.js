import React from 'react';
import { useSelector  } from 'react-redux';
import { SearchCard, SearchList,SearchListItem, SearchTitle, NumberResult } from './SearchResultStyles';
import { NavLink } from 'react-router-dom';


export default function SearchResultCard(){
    const numberResultsMovie = useSelector(state => state.numberResultsMovie) 
    const numberResultsSeries = useSelector(state => state.numberResultsSeries) 
    const numberResultsPeople = useSelector(state => state.numberResultsPeople) 

    const resultMovie =  Math.round(numberResultsMovie);
    const resultSerie = Math.round(numberResultsSeries);
    const resultPeople = Math.round(numberResultsPeople);
    
    const totalResults = Math.round(resultMovie +  resultSerie  + resultPeople);
    
    


    return (
        <SearchCard>
            <SearchTitle>Resultado da Busca</SearchTitle>
            <hr/>
            <SearchList>
                <NavLink to={'/'}  style={{ textDecoration: 'none' }}>
                    <SearchListItem>
                        Tudo
                        <NumberResult>
                            {totalResults}
                        </NumberResult>
                    </SearchListItem>
                </NavLink>
                <NavLink to='/filmes'  style={{ textDecoration: 'none' }}>
                    <SearchListItem>
                        Filmes
                    <NumberResult>
                    {resultMovie}
                    </NumberResult>
                    </SearchListItem>
                </NavLink>

                <NavLink to='/series'  style={{ textDecoration: 'none' }}>
                    <SearchListItem>
                        Seriados
                    <NumberResult>
                        {resultSerie}
                    </NumberResult>
                    </SearchListItem>
                </NavLink>

               <NavLink  to='/people'  style={{ textDecoration: 'none' }}>
                    <SearchListItem>
                        Pessoas
                    <NumberResult>
                        {resultPeople}
                    </NumberResult>
                    </SearchListItem>
               </NavLink>
            </SearchList>
        </SearchCard>
    )
}