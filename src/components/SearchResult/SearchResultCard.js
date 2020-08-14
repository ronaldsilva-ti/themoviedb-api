import React from 'react';
import { useSelector  } from 'react-redux';
import { SearchCard, SearchList,SearchListItem, SearchTitle, NumberResult } from './SearchResultStyles';
import { NavLink } from 'react-router-dom';


export default function SearchResultCard(){
    const numberResultsMovie = useSelector(state => state.numberResultsMovie) 
    const numberResultsSeries = useSelector(state => state.numberResultsSeries) 



    return (
        <SearchCard>
            <SearchTitle>Resultado da Busca</SearchTitle>
            <hr/>
            <SearchList>
                <NavLink to={'/'}  style={{ textDecoration: 'none' }}>
                    <SearchListItem>
                        Tudo
                        <NumberResult>
                            129
                        </NumberResult>
                    </SearchListItem>
                </NavLink>
                <NavLink to='/filmes'  style={{ textDecoration: 'none' }}>
                    <SearchListItem>
                        Filmes
                    <NumberResult>
                    {numberResultsMovie}
                    </NumberResult>
                    </SearchListItem>
                </NavLink>

                <NavLink to='/series'  style={{ textDecoration: 'none' }}>
                    <SearchListItem>
                        Seriados
                    <NumberResult>
                        {numberResultsSeries}
                    </NumberResult>
                    </SearchListItem>
                </NavLink>

                <SearchListItem>
                    Pessoas
                <NumberResult>
                    23
                </NumberResult>
                </SearchListItem>
            </SearchList>
        </SearchCard>
    )
}