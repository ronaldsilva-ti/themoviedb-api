import React from 'react';
import { parseISO, format } from 'date-fns';
import { useDispatch } from 'react-redux';

import { 
    SeriesContainerCard,
    SeriesCardInfo,
    SeriesTitle,
    SeriesImage,
    SeriesDescription,
    SeriesDate,
    Container,
    FavoriteButton
  } from './SeriesCardStyles';
  import { addFavorite } from '../../actions/Favorite';
  
export default function SeriesCard({item, onClickDetails}){  

      // const date = item.release_date;
      // const parsedDate = parseISO(date);  
  
      // const formattedDate = format(
      //     parsedDate, 
      //     " dd'/'MM'/'yyyy "
      //   );

      const dispatch = useDispatch()

        
    return(       
          <>  
                <SeriesContainerCard key={item.id}>
                      <SeriesImage src={item.poster_src} />
                      <SeriesCardInfo>
                        <Container>
                               <SeriesTitle onClick={onClickDetails}>{item.title}</SeriesTitle>
                               <FavoriteButton onClick={() => dispatch(addFavorite(item))} >Favoritar</FavoriteButton>
                        </Container>                          
                          <SeriesDate>{item.first_air_date}</SeriesDate>
                          <SeriesDescription>{item.overview}</SeriesDescription>
                      </SeriesCardInfo>            
                </SeriesContainerCard>
          </>
    )
}