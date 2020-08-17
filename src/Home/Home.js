import React from 'react';
import SearchResult from '../components/SearchResult/SearchResult';
import SearchBar from '../components/SearchBar/SearchBar';
import { RootContainer, ContainerMovieList, ContainerSearchResult } from './HomeStyles';
import RouterPage from '../Router/index';
import Navbar from '../components/Navbar';



export default function Home() {

  return (  
    <>
      <Navbar/>
        <SearchBar/>        
          <RootContainer>      

              <ContainerSearchResult>
                  <SearchResult/>       
              </ContainerSearchResult>

            <ContainerMovieList >     
                <RouterPage/>      
            </ContainerMovieList>

        </RootContainer>
    </> 
    
  )
}