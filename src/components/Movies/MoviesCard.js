import React from 'react';
import { 
    MoviesContainerCard,
    MoviesCardInfo,
    MoviesTitle,
    MoviesImage,
    MoviesDescription,
    MoviesDate
  } from './MoviesCardStyles';

export default function MoviesCard({Movie}){
    return(
        <MoviesContainerCard>
            <MoviesImage src={Movie.imageMovie} />
            
            <MoviesCardInfo>
                <MoviesTitle>{Movie.name}</MoviesTitle>
                <MoviesDate>{Movie.date}</MoviesDate>
                <MoviesDescription>{Movie.description}</MoviesDescription>
            </MoviesCardInfo>

        </MoviesContainerCard>
    )
}