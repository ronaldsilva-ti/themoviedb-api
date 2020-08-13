import React from 'react';
import { useSelector  } from 'react-redux';
import { SearchCard, SearchList,SearchListItem, SearchTitle, NumberResult } from './SearchResultStyles';
import {BrowserRouter as Router, NavLink } from 'react-router-dom';


export default function SearchResultCard(){
    const numberResultsMovie = useSelector(state => state.numberResultsMovie) 


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

                <SearchListItem>
                    Seriados
                <NumberResult>
                      13
                </NumberResult>
                </SearchListItem>

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