import React from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';

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
      const dispatch = useDispatch()

      const date = item.first_air_date;

      const dateFormart =  moment(new Date(date)).format("DD/MM/YYYY");
        
    return(       
          <>  
                <SeriesContainerCard key={item.id}>
                      <SeriesImage src={item.poster_src} />
                      <SeriesCardInfo>
                        <Container>
                               <SeriesTitle onClick={onClickDetails}>{item.title}</SeriesTitle>
                               <FavoriteButton onClick={() => dispatch(addFavorite(item))} >Favoritar</FavoriteButton>
                        </Container>                          
                          <SeriesDate>{dateFormart}</SeriesDate>
                          <SeriesDescription>{item.overview}</SeriesDescription>
                      </SeriesCardInfo>            
                </SeriesContainerCard>
          </>
    )
}