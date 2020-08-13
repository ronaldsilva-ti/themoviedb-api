import React from 'react';
import  Movies from '../components/Movies/Movies';
import SearchResult from '../components/SearchResult/SearchResult';
import SearchBar from '../components/SearchBar/SearchBar';
import { RootContainer, ContainerMovieList, ContainerSearchResult } from './HomeStyles'

export default function Home() {

  return (  
    <>
        <SearchBar/>        
          <RootContainer>      
              <ContainerSearchResult>
                  <SearchResult/>       
              </ContainerSearchResult>
            <ContainerMovieList >     
               <Movies/>      
            </ContainerMovieList>
        </RootContainer>
  </>
   
    
  )
}