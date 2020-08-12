import React from 'react';
import { SearchCard, SearchList,SearchListItem, SearchTitle } from './SearchResultStyles';


export default function SearchResultCard(){
    return (
        <SearchCard>
            <SearchTitle>Resultado da Busca</SearchTitle>
            <hr/>
            <SearchList>
                <SearchListItem>Filmes</SearchListItem>
                <SearchListItem>Seriados</SearchListItem>
                <SearchListItem>Pessoas</SearchListItem>
            </SearchList>
        </SearchCard>
    )
}