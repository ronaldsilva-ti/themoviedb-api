import React from 'react';
import { parseISO, format } from 'date-fns';

import { 
    SeriesContainerCard,
    SeriesCardInfo,
    SeriesTitle,
    SeriesImage,
    SeriesDescription,
    SeriesDate
  } from './SeriesCardStyles';
  
export default function SeriesCard({item, onClickDetails}){  

      // const date = item.release_date;
      // const parsedDate = parseISO(date);  
  
      // const formattedDate = format(
      //     parsedDate, 
      //     " dd'/'MM'/'yyyy "
      //   );


        
    return(       
          <>  
                <SeriesContainerCard key={item.id}>
                      <SeriesImage src={item.poster_src} />
                      <SeriesCardInfo>
                          <SeriesTitle onClick={onClickDetails}>{item.title}</SeriesTitle>
                          <SeriesDate>{item.first_air_date}</SeriesDate>
                          <SeriesDescription>{item.overview}</SeriesDescription>
                      </SeriesCardInfo>            
                </SeriesContainerCard>
          </>
    )
}