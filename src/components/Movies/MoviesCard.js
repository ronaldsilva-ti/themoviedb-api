import React from 'react';
import { parseISO, format } from 'date-fns';

import { 
    MoviesContainerCard,
    MoviesCardInfo,
    MoviesTitle,
    MoviesImage,
    MoviesDescription,
    MoviesDate
  } from './MoviesCardStyles';

export default function MoviesCard({ item, onClickDetails }){   

    const date = item.release_date;
    const parsedDate = parseISO(date);  

    const formattedDate = format(
        parsedDate, 
        " dd'/'MM'/'yyyy "
      );
    
    // console.log(formattedDate)
    
    return(       
          <>        
                <MoviesContainerCard key={item.id}>              
                    <MoviesImage src={item.poster_src} />
                    <MoviesCardInfo>
                            <MoviesTitle onClick={onClickDetails}>{item.title}</MoviesTitle>
                            <MoviesDate>{formattedDate}</MoviesDate>
                            <MoviesDescription>{item.overview}</MoviesDescription>
                    </MoviesCardInfo>                
                </MoviesContainerCard>                 
                
          </>
    )
}