import React from 'react';
import { 
    MoviesContainerCard,
    MoviesCardInfo,
    MoviesTitle,
    MoviesImage,
    MoviesDescription,
    MoviesDate
  } from './MoviesCardStyles';
import { URL_IMAGE } from '../../api';



export default function MoviesCard({result}){     

    const { poster_src, title, release_date, overview} = result;
    return(       
          <>    
                    <MoviesContainerCard>
                        <MoviesImage src={poster_src} />

                        <MoviesCardInfo>
                            <MoviesTitle>{title}</MoviesTitle>
                            <MoviesDate>{release_date}</MoviesDate>
                            <MoviesDescription>{overview}</MoviesDescription>
                        </MoviesCardInfo>
                    
                    </MoviesContainerCard>

              
          </>
    )
}