import React from 'react';
import { 
    SeriesContainerCard,
    SeriesCardInfo,
    SeriesTitle,
    SeriesImage,
    SeriesDescription,
    SeriesDate
  } from './SeriesCardStyles';
  
export default function SeriesCard({item, onClickDetails}){      
  
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