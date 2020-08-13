import React from 'react';
import { useSelector  } from 'react-redux';
import { SearchCard, SearchList,SearchListItem, SearchTitle, NumberResult } from './SearchResultStyles';


export default function SearchResultCard(){
    const numberResultsMovie = useSelector(state => state.numberResultsMovie) 
    console.log(numberResultsMovie)


    return (
        <SearchCard>
            <SearchTitle>Resultado da Busca</SearchTitle>
            <hr/>
            <SearchList>
                <SearchListItem>
                    Tudo
                <NumberResult>
                    129
                </NumberResult>
                </SearchListItem>

                <SearchListItem>
                    Filmes
                <NumberResult>
                   {numberResultsMovie}
                </NumberResult>
                </SearchListItem>

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