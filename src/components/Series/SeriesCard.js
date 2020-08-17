import React from 'react';
import { useSelector } from 'react-redux';
import { 
    SeriesContainerCard,
    SeriesCardInfo,
    SeriesTitle,
    SeriesImage,
    SeriesDescription,
    SeriesDate
  } from './SeriesCardStyles';
  
export default function SeriesCard(){   
    
    const serie = useSelector(state => state.seriesList);

    return(       
          <>  
              {
                  serie.map(series => (
                    <SeriesContainerCard key={series.id}>
                      <SeriesImage src={series.poster_src} />

                      <SeriesCardInfo>
                          <SeriesTitle>{series.original_name}</SeriesTitle>
                          <SeriesDate>{series.first_air_date}</SeriesDate>
                          <SeriesDescription>{series.overview}</SeriesDescription>
                      </SeriesCardInfo>            
                </SeriesContainerCard>
                  ))
              }   
              
          </>
    )
}