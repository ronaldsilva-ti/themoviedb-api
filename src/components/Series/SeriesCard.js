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
    
    const serie = useSelector(state => state.series);

    return(       
          <>    
              {
                  serie.map(series => (
                    <SeriesContainerCard key={series.id}>
                    <SeriesImage src={series.poster_src} />

                    <SeriesCardInfo>
                        <SeriesTitle>{series.title}</SeriesTitle>
                        <SeriesDate>{series.release_date}</SeriesDate>
                        <SeriesDescription>{series.overview}</SeriesDescription>
                    </SeriesCardInfo>
            
                </SeriesContainerCard>
                  ))
              }
                      
                       
                   

              
          </>
    )
}