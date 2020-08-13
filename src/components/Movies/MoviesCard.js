import React from 'react';
import { useSelector } from 'react-redux';
import { 
    MoviesContainerCard,
    MoviesCardInfo,
    MoviesTitle,
    MoviesImage,
    MoviesDescription,
    MoviesDate
  } from './MoviesCardStyles';



export default function MoviesCard(){   
    
    const movie = useSelector(state => state.movieList)   

    return(       
          <>    
              {
                  movie.map(movies => (
                    <MoviesContainerCard key={movies.id}>
                    <MoviesImage src={movies.poster_src} />

                    <MoviesCardInfo>
                        <MoviesTitle>{movies.title}</MoviesTitle>
                        <MoviesDate>{movies.release_date}</MoviesDate>
                        <MoviesDescription>{movies.overview}</MoviesDescription>
                    </MoviesCardInfo>
            
                </MoviesContainerCard>
                  ))
              }
                      
                       
                   

              
          </>
    )
}