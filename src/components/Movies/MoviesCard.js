import React from 'react';

import { 
    MoviesContainerCard,
    MoviesCardInfo,
    MoviesTitle,
    MoviesImage,
    MoviesDescription,
    MoviesDate
  } from './MoviesCardStyles';



export default function MoviesCard({ item, onClickDetails }){  
    
    return(       
          <>        
                    <MoviesContainerCard key={item.id}>              
                        <MoviesImage src={item.poster_src} />
                        <MoviesCardInfo>
                            <MoviesTitle onClick={onClickDetails}>{item.title}</MoviesTitle>
                            <MoviesDate>{item.release_date}</MoviesDate>
                            <MoviesDescription>{item.overview}</MoviesDescription>
                        </MoviesCardInfo>                
                    </MoviesContainerCard>                 
                
          </>
    )
}